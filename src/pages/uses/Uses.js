import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';
import {useTranslation} from "react-i18next";

export const Uses = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Meta
        title={t('toolbox_title')}
        description={t('toolbox_description')}
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={t('toolbox_title')}
          description={t('toolbox_description')}
          linkLabel={t('video_by') + " Dina"}
          url="https://www.pexels.com/video/person-working-on-his-laptop-1851768/"
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{t('toolbox_dev')}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    {t('toolbox_dev_desc1')}
                    <Link href="https://www.jetbrains.com/">Jet Brains</Link>.
                    {t('toolbox_dev_desc2')}
                  </ListItem>
                  <ListItem>
                    {t('toolbox_dev_desc3')}
                  </ListItem>
                  <ListItem>
                    {t('toolbox_dev_desc4')}
                  </ListItem>
                  <ListItem>
                    {t('toolbox_dev_desc5')}
                  </ListItem>
                  <ListItem>
                    {t('toolbox_dev_desc6')}
                    <Link href='https://www.python.org/'>Python</Link>,
                    {t('toolbox_dev_desc7')}
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{t('toolbox_design')}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    {t('toolbox_design_desc1')}
                    <Link href='https://www.adobe.com/de/products/illustrator.html'>Adobe Illustrator</Link>.
                  </ListItem>
                  <ListItem>
                    {t('toolbox_design_desc2')}
                    <Link href='https://www.adobe.com/de/products/photoshop.html'>Adobe Photoshop</Link>.
                  </ListItem>
                  <ListItem>
                    {t('toolbox_design_desc3')}
                    <Link href='https://www.adobe.com/de/products/indesign.html'>In Design</Link>
                    {t('toolbox_design_desc4')}
                    <Link href='https://www.flyeralarm.com/'>Flyeralarm</Link>,
                    {t('toolbox_design_desc5')}
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>Intel Core i5-13600KF</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>NVIDIA GeForce RTX 3070Ti</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>G.Skill 32GB DDR5 6000mhz</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>ASRock Z790 PG Lightning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>2x BenQ EW2750ZL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Razer Huntsman Elite</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Basilisk Ultimate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mousepad</TableHeadCell>
                    <TableCell>Razer Goliathus Chroma</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 16″ (2019)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Astro A50 Wireless</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer iandpp_name={t('iandpp_name')}/>
    </Fragment>
  );
};
