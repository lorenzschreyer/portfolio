import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import codingChallenge from 'assets/coding-challenge.png';
import codingChallengeLarge from 'assets/coding-challenge-large.png';
import codingChallengePlaceholder from 'assets/coding-challenge-placeholder.png';
import codingChallengeCode from 'assets/coding-challenge-code.png';
import codingChallengeCodeLarge from 'assets/coding-challenge-code-large.png';
import codingChallengeCodePlaceholder from 'assets/coding-challenge-code-placeholder.png';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './AmplimindCodingChallenge.module.css';
import {Button} from "../../../components/Button";
import {socialLinks} from "../../../components/Navbar/navData";
import {List, ListItem} from "../../../components/List";
import {Table, TableBody, TableCell, TableHeadCell, TableRow} from "../../../components/Table";

const title = 'coding challenge platform for amplimind';
const description =
  'This project involved implementation of an open-source platform to facilitate the application process of software companies.';
const roles = ['Django Backend Development', 'GithubApi Integration', 'Test Implementation', ];

export const AmplimindCodingChallenge = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={codingChallengeCode}
          srcSet={`${codingChallengeCode.src} 1280w, ${codingChallengeCodeLarge.src} 2560w`}
          placeholder={codingChallengeCodePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Visit amplimind"
          url="https://www.amplimind.io"
          roles={roles}
        />
        <Button
          secondary
          iconHoverShift
          className={styles.linkButton}
          icon="chevronRight"
          href="https://github.com/ampcc/coding-challenge"
        >
          View on Github
        </Button>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[codingChallenge, codingChallengeLarge]}
              placeholder={codingChallengePlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="bottom">
          <ProjectSectionContent>
            <ProjectSectionHeading>The vision</ProjectSectionHeading>
            <ProjectSectionText>
              As a team of 12 computer science students,
              we were assigned a project under the supervision of
              amplimind to improve the application process at the company software supported.
              Despite the business use at said company, the project is kept <b>open source</b>.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionHeading>The approach</ProjectSectionHeading>
            <ProjectSectionText>
              Our approach was primarily a one-time link that is sent to
              selected applicants and thus no <b>personal</b> data and passwords have to be stored and transmitted.

              After the link is opened, the user must confirm the start of a challenge,
              is given a certain amount of time to complete and last has the possibility to upload a solution.
              The uploaded files are transferred to a <b>Github Repository</b> where they are checked and linted by an <b>Github Action</b>.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Architecture and technologies</ProjectSectionHeading>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeadCell>frontend</TableHeadCell>
                  <TableCell>Angular/Node.js</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>backend</TableHeadCell>
                  <TableCell>Django framework (python)</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>database</TableHeadCell>
                  <TableCell>PostgreSQL</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>deployment</TableHeadCell>
                  <TableCell>Amazon Web Services (aws)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ProjectSectionContent>

            {/*<div className={styles.sidebarImages}>*/}
            {/*  <Image*/}
            {/*    className={styles.sidebarImage}*/}
            {/*    srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}*/}
            {/*    placeholder={sliceSidebarLayersPlaceholder}*/}
            {/*    alt="The layers sidebar design, now with user profiles."*/}
            {/*    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*    className={styles.sidebarImage}*/}
            {/*    srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}*/}
            {/*    placeholder={sliceSidebarAnnotationsPlaceholder}*/}
            {/*    alt="Multiple user annotations on a shared layer."*/}
            {/*    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}*/}
            {/*  />*/}
            {/*</div>*/}
          {/*</ProjectSectionColumns>*/}
        </ProjectSection>
    {/*    <ProjectSection light>*/}
    {/*      <ProjectSectionContent>*/}
    {/*        <ProjectTextRow>*/}
    {/*          <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>*/}
    {/*          <ProjectSectionText>*/}
    {/*            A problem we heard about often form users was that it was difficult to*/}
    {/*            find images they had previously seen or worked on. To solve this we added*/}
    {/*            a new tab that lists all previously annotated slides. In addition, we*/}
    {/*            added the ability to favorite slides, so if users find an interesting*/}
    {/*            slide they want to annotate later, they can easily save it to their*/}
    {/*            account.*/}
    {/*          </ProjectSectionText>*/}
    {/*        </ProjectTextRow>*/}
    {/*        <Image*/}
    {/*          srcSet={[sliceSlides, sliceSlidesLarge]}*/}
    {/*          placeholder={sliceSlidesPlaceholder}*/}
    {/*          alt="The new My Slides tab in slice, showing annotated and favorited slides."*/}
    {/*          sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}*/}
    {/*        />*/}
    {/*      </ProjectSectionContent>*/}
    {/*    </ProjectSection>*/}
    {/*    <ProjectSection padding="top">*/}
    {/*      <ProjectSectionContent className={styles.grid}>*/}
    {/*        <div className={styles.gridImage}>*/}
    {/*          <div className={styles.gridBackground}>*/}
    {/*            <Image*/}
    {/*              srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}*/}
    {/*              placeholder={sliceBackgroundBarPlaceholder}*/}
    {/*              alt=""*/}
    {/*              role="presentation"*/}
    {/*              sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}*/}
    {/*            />*/}
    {/*          </div>*/}
    {/*          <div className={styles.gridForeground}>*/}
    {/*            <Image*/}
    {/*              srcSet={[sliceAnnotation, sliceAnnotationLarge]}*/}
    {/*              placeholder={sliceAnnotationPlaceholder}*/}
    {/*              alt="An annotation preview popover with statistics for shape perimeter and area."*/}
    {/*              sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}*/}
    {/*            />*/}
    {/*          </div>*/}
    {/*        </div>*/}
    {/*        <div className={styles.gridText}>*/}
    {/*          <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>*/}
    {/*          <ProjectSectionText>*/}
    {/*            Marking and annotating areas on high resolution biomedical images is the*/}
    {/*            core experience of the app, and it was easy to get lost or lose sense of*/}
    {/*            scale when zooming in on details. Adding measurements for the perimeter*/}
    {/*            and area of an annotation both helped to communicate the overall scale of*/}
    {/*            the image and how large the annotated feature is in comparison.*/}
    {/*          </ProjectSectionText>*/}
    {/*        </div>*/}
    {/*      </ProjectSectionContent>*/}
    {/*    </ProjectSection>*/}
    {/*    <ProjectSection>*/}
    {/*      <ProjectSectionContent>*/}
    {/*        <ProjectTextRow>*/}
    {/*          <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>*/}
    {/*          <ProjectSectionText>*/}
    {/*            Real-time collaborative annotation facilitated better collaboration*/}
    {/*            between learners, and was much easier to run group exercises with the new*/}
    {/*            shared layers feature. Learners gave feedback that is was enjoyable to*/}
    {/*            work together and see what others were doing, and liked how interactive*/}
    {/*            and easy to use the application was.*/}
    {/*          </ProjectSectionText>*/}
    {/*        </ProjectTextRow>*/}
    {/*        <Image*/}
    {/*          src={sliceIrl}*/}
    {/*          placeholder={sliceIrlPlaceholder}*/}
    {/*          alt="Students at the University of New South Wales using the new collaborative annotation features"*/}
    {/*        />*/}
    {/*      </ProjectSectionContent>*/}
    {/*    </ProjectSection>*/}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
