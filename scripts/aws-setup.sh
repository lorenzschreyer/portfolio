#!/usr/bin/env bash
#
# AWS Infrastructure Setup for Portfolio Deployment
#
# Prerequisites:
#   - AWS CLI installed and configured (aws configure)
#   - Docker installed locally
#
# Usage:
#   chmod +x scripts/aws-setup.sh
#   ./scripts/aws-setup.sh
#
set -euo pipefail

# ──────────────────────────────────────────────
# Configuration - adjust these values
# ──────────────────────────────────────────────
AWS_REGION="eu-central-1"
ECR_REPO_NAME="portfolio"
APP_RUNNER_SERVICE_NAME="portfolio-service"
GITHUB_ORG="lorenzschreyer"       # GitHub username or organization
GITHUB_REPO="portfolio"           # GitHub repository name

echo "======================================"
echo " AWS Portfolio Deployment Setup"
echo "======================================"
echo ""
echo "Region: $AWS_REGION"
echo ""

# ──────────────────────────────────────────────
# Step 1: Create ECR Repository
# ──────────────────────────────────────────────
echo "[1/5] Creating ECR repository..."
aws ecr create-repository \
  --repository-name "$ECR_REPO_NAME" \
  --region "$AWS_REGION" \
  --image-scanning-configuration scanOnPush=true \
  --encryption-configuration encryptionType=AES256 \
  2>/dev/null && echo "  ECR repository created." || echo "  ECR repository already exists."

# Set lifecycle policy to keep only last 5 images (saves storage costs)
aws ecr put-lifecycle-policy \
  --repository-name "$ECR_REPO_NAME" \
  --region "$AWS_REGION" \
  --lifecycle-policy-text '{
    "rules": [
      {
        "rulePriority": 1,
        "description": "Keep only last 5 images",
        "selection": {
          "tagStatus": "any",
          "countType": "imageCountMoreThan",
          "countNumber": 5
        },
        "action": {
          "type": "expire"
        }
      }
    ]
  }' > /dev/null
echo "  Lifecycle policy set (keeps last 5 images)."

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME"
echo "  ECR URI: $ECR_URI"

# ──────────────────────────────────────────────
# Step 2: Create IAM Role for App Runner (ECR access)
# ──────────────────────────────────────────────
echo ""
echo "[2/5] Creating IAM role for App Runner ECR access..."

APP_RUNNER_ECR_ROLE="AppRunnerECRAccessRole"

aws iam create-role \
  --role-name "$APP_RUNNER_ECR_ROLE" \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "build.apprunner.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }' 2>/dev/null && echo "  Role created." || echo "  Role already exists."

aws iam attach-role-policy \
  --role-name "$APP_RUNNER_ECR_ROLE" \
  --policy-arn "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess" \
  2>/dev/null
echo "  ECR access policy attached."

APP_RUNNER_ECR_ROLE_ARN=$(aws iam get-role --role-name "$APP_RUNNER_ECR_ROLE" --query Role.Arn --output text)
echo "  Role ARN: $APP_RUNNER_ECR_ROLE_ARN"

# ──────────────────────────────────────────────
# Step 3: Create OIDC Provider for GitHub Actions
# ──────────────────────────────────────────────
echo ""
echo "[3/5] Setting up GitHub Actions OIDC provider..."

# Check if OIDC provider already exists
OIDC_ARN="arn:aws:iam::${ACCOUNT_ID}:oidc-provider/token.actions.githubusercontent.com"
if aws iam get-open-id-connect-provider --open-id-connect-provider-arn "$OIDC_ARN" > /dev/null 2>&1; then
  echo "  OIDC provider already exists."
else
  aws iam create-open-id-connect-provider \
    --url "https://token.actions.githubusercontent.com" \
    --client-id-list "sts.amazonaws.com" \
    --thumbprint-list "6938fd4d98bab03faadb97b34396831e3780aea1" \
    > /dev/null
  echo "  OIDC provider created."
fi

# ──────────────────────────────────────────────
# Step 4: Create IAM Role for GitHub Actions
# ──────────────────────────────────────────────
echo ""
echo "[4/5] Creating IAM role for GitHub Actions..."

GH_ACTIONS_ROLE="GitHubActionsDeployRole"

aws iam create-role \
  --role-name "$GH_ACTIONS_ROLE" \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Federated": "arn:aws:iam::'"$ACCOUNT_ID"':oidc-provider/token.actions.githubusercontent.com"
        },
        "Action": "sts:AssumeRoleWithWebIdentity",
        "Condition": {
          "StringEquals": {
            "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
          },
          "StringLike": {
            "token.actions.githubusercontent.com:sub": "repo:'"$GITHUB_ORG/$GITHUB_REPO"':ref:refs/heads/main"
          }
        }
      }
    ]
  }' 2>/dev/null && echo "  Role created." || echo "  Role already exists."

# Create inline policy for deployment permissions
aws iam put-role-policy \
  --role-name "$GH_ACTIONS_ROLE" \
  --policy-name "DeployPolicy" \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "ECRAuth",
        "Effect": "Allow",
        "Action": "ecr:GetAuthorizationToken",
        "Resource": "*"
      },
      {
        "Sid": "ECRPush",
        "Effect": "Allow",
        "Action": [
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload"
        ],
        "Resource": "arn:aws:ecr:'"$AWS_REGION"':'"$ACCOUNT_ID"':repository/'"$ECR_REPO_NAME"'"
      },
      {
        "Sid": "AppRunner",
        "Effect": "Allow",
        "Action": [
          "apprunner:CreateService",
          "apprunner:UpdateService",
          "apprunner:DescribeService",
          "apprunner:ListServices"
        ],
        "Resource": "*"
      },
      {
        "Sid": "PassRole",
        "Effect": "Allow",
        "Action": "iam:PassRole",
        "Resource": "arn:aws:iam::'"$ACCOUNT_ID"':role/'"$APP_RUNNER_ECR_ROLE"'"
      }
    ]
  }'
echo "  Deploy policy attached."

GH_ACTIONS_ROLE_ARN=$(aws iam get-role --role-name "$GH_ACTIONS_ROLE" --query Role.Arn --output text)
echo "  Role ARN: $GH_ACTIONS_ROLE_ARN"

# ──────────────────────────────────────────────
# Step 5: Summary
# ──────────────────────────────────────────────
echo ""
echo "======================================"
echo " Setup Complete!"
echo "======================================"
echo ""
echo "Add these as GitHub Repository Secrets/Variables:"
echo ""
echo "  Secrets:"
echo "    AWS_ROLE_ARN              = $GH_ACTIONS_ROLE_ARN"
echo "    APP_RUNNER_ECR_ROLE_ARN   = $APP_RUNNER_ECR_ROLE_ARN"
echo ""
echo "  Variables:"
echo "    NEXT_PUBLIC_WEBSITE_URL   = https://lorenzschreyer.de"
echo "    NEXT_PUBLIC_API_URL       = (your API URL)"
echo ""
echo "After the first deployment, get the App Runner URL with:"
echo "  aws apprunner list-services --query 'ServiceSummaryList[0].ServiceUrl' --output text"
echo ""
echo "Then configure Cloudflare DNS:"
echo "  Type: CNAME"
echo "  Name: @ (or your subdomain)"
echo "  Target: <App Runner URL from above>"
echo "  Proxy: Enabled (orange cloud)"
echo ""
