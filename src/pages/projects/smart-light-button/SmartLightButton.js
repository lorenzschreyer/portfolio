import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import smartLB from 'assets/smart-light-button.png';
import smartLBLarge from 'assets/smart-light-button-large.png';
import smartLBPlaceholder from 'assets/smart-light-button-placeholder.png';
import smartLBCode from 'assets/smart-light-button-code.png';
import smartLBCodeLarge from 'assets/smart-light-button-code-large.png';
import smartLBCodePlaceholder from 'assets/smart-light-button-code-placeholder.png';
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
import { media } from 'utils/style';
import styles from './SmartLightButton.module.css';
import {Button} from "../../../components/Button";
import {Table, TableBody, TableCell, TableHeadCell, TableRow} from "../../../components/Table";

import { useTranslation } from "react-i18next";

const roles = ['C++ Development', 'Microcontroller', 'platformio', ];

export const SmartLightButton = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Meta title={t('project3_title')} prefix="Projects" description={t('project3_description')} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={smartLBCode}
          srcSet={`${smartLBCode.src} 1280w, ${smartLBCodeLarge.src} 2560w`}
          placeholder={smartLBCodePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={t('project3_title')}
          description={t('project3_description')}
          // linkLabel="amplimind"
          // url="https://www.amplimind.io"
          roles={roles}
        />
        {/*<Button*/}
        {/*  secondary*/}
        {/*  iconHoverShift*/}
        {/*  className={styles.linkButton}*/}
        {/*  icon="github"*/}
        {/*  href="https://github.com/ampcc/coding-challenge"*/}
        {/*>*/}
        {/*  {t('view_on_github')}*/}
        {/*</Button>*/}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[smartLB, smartLBLarge]}
              placeholder={smartLBPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="bottom">
          <ProjectSectionContent>
            <ProjectSectionHeading>{t('project3_idea')}</ProjectSectionHeading>
            <ProjectSectionText>
              {t('project3_idea_desc')}

            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionHeading>{t('project3_components')}</ProjectSectionHeading>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeadCell>WEMOS d1 mini (esp8266)</TableHeadCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>WS2812 B 5mm LED</TableHeadCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>Breadboard</TableHeadCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>{t('cables')}</TableHeadCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>{t('project3_lightswitch')}</TableHeadCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>(optional) {t('project3_any_sensors')}</TableHeadCell>
                </TableRow>
              </TableBody>
            </Table>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>{t('project3_implementation')}</ProjectSectionHeading>
            <ProjectSectionText>
              {t('project3_implementation_desc1')}<br/><br/>
              {t('project3_implementation_desc2')}
              {/*<span dangerouslySetInnerHTML={{__html: I18n.t('my_translation')}} ></span>*/}
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionHeading>{t('project3_whatscool')}</ProjectSectionHeading>
            <ProjectSectionText>
              {t('project3_whatscool_desc')}
              {/*<span dangerouslySetInnerHTML={{__html: I18n.t('my_translation')}} ></span>*/}
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>{t('architecture_technologies')}</ProjectSectionHeading>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeadCell>Code</TableHeadCell>
                  <TableCell>C++</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>Platform</TableHeadCell>
                  <TableCell>platformio</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeadCell>data</TableHeadCell>
                  <TableCell>EEPROM (Electrically Erasable Programmable Read-Only Memory)</TableCell>
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
      <Footer iandpp_name={t('iandpp_name')}/>
    </Fragment>
  );
};
