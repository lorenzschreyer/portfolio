import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import websiteSchoenauerLarge from 'assets/website-schoenauer-large.png';
import websiteSchoenauerPlaceholder from 'assets/website-schoenauer-placeholder.png';
import websiteSchoenauer from 'assets/website-schoenauer.png';
import websiteCode from 'assets/coding-challenge-code.png';
import websiteCodeLarge from 'assets/coding-challenge-code-large.png';
import websiteCodePlaceholder from 'assets/coding-challenge-code-placeholder.png';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import {classes, cssProps, media, numToMs} from 'utils/style';
import styles from './Websites.module.css';
import {Button} from "../../../components/Button";
import {Table, TableBody, TableCell, TableHeadCell, TableRow} from "../../../components/Table";

import { useTranslation } from "react-i18next";
import {Section} from "../../../components/Section";
import {Heading} from "../../../components/Heading";
import {Text} from "../../../components/Text";

const roles = ['Elementor', 'Wordpress', 'Hosting', ];

export function ProjectWebsite({
  title,
  description,
  link,
  linktext,
  preview,
  previewLarge,
  previewPlaceholder,
  lightMode,
  }) {
  return (
    <ProjectSection light={lightMode}>
      <ProjectSectionContent>
        <ProjectSectionHeading>{title}</ProjectSectionHeading>
        <ProjectImage
          srcSet={[preview, previewLarge]}
          placeholder={previewPlaceholder}
          alt={title}
          sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
        />
        <ProjectSectionText>
          {description}
          <br/><br/>
          {/*<span dangerouslySetInnerHTML={{__html: I18n.t('my_translation')}} ></span>*/}
          <Button
            secondary
            iconHoverShift
            className={styles.linkButton}
            icon="arrowRight"
            href={link}
          >
            {linktext}
          </Button>
        </ProjectSectionText>
      </ProjectSectionContent>
    </ProjectSection>
  );
}

export const Websites = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Meta title={t('project1_title')} prefix="Projects" description={t('project1_description')} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={websiteCode}
          srcSet={`${websiteCode.src} 1280w, ${websiteCodeLarge.src} 2560w`}
          placeholder={websiteCodePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={t('project1_title')}
          description={t('project1_description')}
          roles={roles}
        />
        <ProjectWebsite
          title={t('website1_title')}
          description={t('website1_description')}
          link="https://maler-schoenauer.de/"
          linktext={t('to_website')}
          preview={websiteSchoenauer}
          previewLarge={websiteSchoenauerLarge}
          previewPlaceholder={websiteSchoenauerPlaceholder}
          lightMode={false}
        ></ProjectWebsite>
        {/*<ProjectSection padding="top">*/}
        {/*  <ProjectSectionContent>*/}
        {/*    <ProjectImage*/}
        {/*      srcSet={[codingChallenge, codingChallengeLarge]}*/}
        {/*      placeholder={codingChallengePlaceholder}*/}
        {/*      alt="The Slice web application showing a selected user annotation."*/}
        {/*      sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}*/}
        {/*    />*/}
        {/*  </ProjectSectionContent>*/}
        {/*</ProjectSection>*/}
        {/*<ProjectSection padding="bottom">*/}
        {/*  <ProjectSectionContent>*/}
        {/*    <ProjectSectionHeading>{t('project1_vision')}</ProjectSectionHeading>*/}
        {/*    <ProjectSectionText>*/}
        {/*      {t('project1_vision_desc')}*/}

        {/*    </ProjectSectionText>*/}
        {/*  </ProjectSectionContent>*/}
        {/*</ProjectSection>*/}
        {/*<ProjectSection light>*/}
        {/*  <ProjectSectionContent>*/}
        {/*    <ProjectSectionHeading>{t('project1_approach')}</ProjectSectionHeading>*/}
        {/*    <ProjectSectionText>*/}
        {/*      {t('project1_approach_desc')}*/}
        {/*      /!*<span dangerouslySetInnerHTML={{__html: I18n.t('my_translation')}} ></span>*!/*/}
        {/*    </ProjectSectionText>*/}
        {/*  </ProjectSectionContent>*/}
        {/*</ProjectSection>*/}
        {/*<ProjectSection>*/}
        {/*  <ProjectSectionContent>*/}
        {/*    <ProjectSectionHeading>{t('architecture_technologies')}</ProjectSectionHeading>*/}
        {/*    <Table>*/}
        {/*      <TableBody>*/}
        {/*        <TableRow>*/}
        {/*          <TableHeadCell>frontend</TableHeadCell>*/}
        {/*          <TableCell>Angular/Node.js</TableCell>*/}
        {/*        </TableRow>*/}
        {/*        <TableRow>*/}
        {/*          <TableHeadCell>backend</TableHeadCell>*/}
        {/*          <TableCell>Django framework (python)</TableCell>*/}
        {/*        </TableRow>*/}
        {/*        <TableRow>*/}
        {/*          <TableHeadCell>database</TableHeadCell>*/}
        {/*          <TableCell>PostgreSQL</TableCell>*/}
        {/*        </TableRow>*/}
        {/*        <TableRow>*/}
        {/*          <TableHeadCell>deployment</TableHeadCell>*/}
        {/*          <TableCell>Amazon Web Services (aws)</TableCell>*/}
        {/*        </TableRow>*/}
        {/*      </TableBody>*/}
        {/*    </Table>*/}
        {/*  </ProjectSectionContent>*/}

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
        {/*</ProjectSection>*/}
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
      <Footer iandpp_name={t('iandpp_name')}/>
    </Fragment>
  );
};
