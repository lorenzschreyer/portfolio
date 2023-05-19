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
import {ProjectSummary} from "../../layouts/Home/ProjectSummary";

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="The hardware and software that I use to implement projects in the best possible way"
          linkLabel="Video by Crista Dina"
          url="https://www.pexels.com/video/person-working-on-his-laptop-1851768/"
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use almost all Products from{' '}
                    <Link href="https://www.jetbrains.com/">Jet Brains</Link>.
                    Therefore, the most efficient working methods with IntelliJ, PyCharm,
                    PhpStorm and C-Lion are well known to me.
                  </ListItem>
                  <ListItem>
                    I especially like the &quot;Code with me&quot; feature of Jet Brains Products,
                    because it allows to work together even more efficiently and better.
                  </ListItem>
                  <ListItem>
                    I am a big fan of platform independence, but if I had to choose one it would be Mac OSX.
                  </ListItem>
                  <ListItem>
                    My front and back end of choice depends on the project to be implemented.
                    The various advantages and disadvantages must be coordinated individually.
                    So it can also be that I write a frontend in plain html, css and javascript.
                  </ListItem>
                  <ListItem>
                    The programming language I like to work with and make my everyday life easier is {' '}
                    <Link href='https://www.python.org/'>Python</Link>,
                    but I know all other common programming languages and I know the benefits and downsides of them.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Graphics I usually make with
                    {' '}<Link href='https://www.adobe.com/de/products/illustrator.html'>Adobe Illustrator</Link>.
                  </ListItem>
                  <ListItem>
                    For editing and adjusting images I use {' '}
                    <Link href='https://www.adobe.com/de/products/photoshop.html'>Adobe Photoshop</Link>.
                  </ListItem>
                  <ListItem>
                    I create print media with {' '} <Link href='https://www.adobe.com/de/products/indesign.html'>In Design</Link> {' '}
                    and then have them printed by {' '} <Link href='https://www.flyeralarm.com/'>Flyeralarm</Link>,
                    because I am familiar with their finishes, paper thicknesses and paper types.
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
      <Footer />
    </Fragment>
  );
};
