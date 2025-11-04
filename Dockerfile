# ----------- Build Stage -----------
FROM node:22-bookworm AS build

WORKDIR /app

# Optional: Telemetrie deaktivieren
ENV NEXT_TELEMETRY_DISABLED=1

RUN apt-get update && apt-get install -y \
  ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 \
  libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 \
  libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libx11-6 \
  libx11-xcb1 libxcb1 libxcomposite1 libxdamage1 libxext6 libxfixes3 \
  libxrandr2 libxshmfence1 libxkbcommon0 libxrender1 libdrm2 \
  wget xdg-utils && \
  rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Build Next.js project
RUN npm run build

# ----------- Runtime Stage -----------
FROM node:22-bookworm-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Add non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs

# Copy build output
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/src/posts ./src/posts
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules

# Expose port and start server
EXPOSE 3000
CMD ["npm", "start"]