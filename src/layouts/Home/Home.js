// noinspection ES6UnusedImports

import websiteSchoenauerLarge from 'assets/website-schoenauer-large.png';
import websiteSchoenauerPlaceholder from 'assets/website-schoenauer-placeholder.png';
import websiteSchoenauer from 'assets/website-schoenauer.png';
import codingChallengeLarge from 'assets/coding-challenge-title-large.png';
import codingChallengePlaceholder from 'assets/coding-challenge-title-placeholder.png';
import codingChallenge from 'assets/coding-challenge-title.png';
import solarMonitorMobile from 'assets/solar-monitor-mobile.png';
import solarMonitorMobilePlaceholder from 'assets/solar-monitor-mobile-placeholder.png';
import smartLB from 'assets/smart-light-button.png';
import smartLBLarge from 'assets/smart-light-button-large.png';
import smartLBPlaceholder from 'assets/smart-light-button-placeholder.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import {socialLinks} from "../../components/Navbar/navData";
import {Button} from "../../components/Button";
import {Section} from "../../components/Section";
import { useTranslation } from "react-i18next";


// const disciplines = ['{ Developer }', '< Architect >', '« Designer »', '❝ Tester ❞', '[ Security ]'];


export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  const { t } = useTranslation();
  const disciplines = [t('developer'), t('architect'), t('designer'), t('tester'), t('security')];

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        // title="Software"
        description="Portfolio - Lorenz Schreyer"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Section>
        <div className={styles.cvButton}>
          <Button iconHoverShift href={"/cv-english.pdf"} iconEnd="file">
            {t('download_cv')}
          </Button>
        </div>
      </Section>

      <ProjectSummary
        id="project-1"
        // alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title={t('project1_title')}
        description={t('project1_description')}
        buttonText={t('project1_buttonText')}
        buttonLink="/projects/websites"
        model={{
          type: 'laptop',
          alt: 'website schoenauer',
          textures: [
            {
              srcSet: [websiteSchoenauer, websiteSchoenauerLarge],
              placeholder: websiteSchoenauerPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title={t('project2_title')}
        description={t('project2_description')}
        buttonText={t('project2_buttonText')}
        buttonLink="/projects/amplimind-codingchallenge"
        model={{
          type: 'laptop',
          alt: 'coding challenge',
          textures: [
            {
              srcSet: [codingChallenge, codingChallengeLarge],
              placeholder: codingChallengePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        // change side
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title={t('project3_title')}
        description={t('project3_description')}
        buttonText={t('project3_buttonText')}
        buttonLink={socialLinks[2].url + "/solarMonitor"}
        model={{
          type: 'phone',
          alt: 'solar monitor schreyer',
          textures: [
            {
              srcSet: [solarMonitorMobile, solarMonitorMobile],
              placeholder: solarMonitorMobilePlaceholder,
            },
          ]
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title={t('project4_title')}
        description={t('project4_description')}
        buttonText={t('project2_buttonText')}
        buttonLink="/projects/smart-light-button"
        model={{
          type: 'laptop',
          alt: 'smart-light-button',
          textures: [
            {
              srcSet: [smartLB, smartLBLarge],
              placeholder: smartLBPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer iandpp_name={t('iandpp_name')}/>
    </div>
  );
};
