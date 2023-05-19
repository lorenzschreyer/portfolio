import codingChallengeLarge from 'assets/coding-challenge-title-large.png';
import codingChallengePlaceholder from 'assets/coding-challenge-title-placeholder.png';
import codingChallenge from 'assets/coding-challenge-title.png';
import solarMonitorMobile from 'assets/solar-monitor-mobile.png';
import solarMonitorMobilePlaceholder from 'assets/solar-monitor-mobile-placeholder.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import {socialLinks} from "../../components/Navbar/navData";
import {Button} from "../../components/Button";
import * as url from "url";

const disciplines = ['{ Developer }', '< Architect >', '« Designer »', '❝ Tester ❞', '[ Security ]'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  // const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

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
        title="Software"
        description="Developer portfolio of Lorenz Schreyer"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.cvButton}>
        <Button iconHoverShift href={"/cv-english.pdf"} iconEnd="file">
          Download CV
        </Button>
      </div>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="coding challenge platform for amplimind"
        description="Implementing an open-source platform to facilitate the application process of software companies."
        buttonText="View project"
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
        id="project-2"
        // change side
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Solar Monitor for a solar system"
        description="Development of an animated website to expose solar status of the inverter"
        buttonText="View on Github"
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
        // model={{
        //     type: 'laptop',
        //     alt: 'solar monitor schreyer',
        //     textures: [
        //       {
        //         srcSet: [codingChallengePlaceholder, codingChallengePlaceholder],
        //         placeholder: codingChallengePlaceholder,
        //       },
        //     ],
        //   }}
      />
      {/*<ProjectSummary*/}
      {/*  id="project-3"*/}
      {/*  sectionRef={projectThree}*/}
      {/*  visible={visibleSections.includes(projectThree.current)}*/}
      {/*  index={3}*/}
      {/*  title="Biomedical image collaboration"*/}
      {/*  description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"*/}
      {/*  buttonText="View project"*/}
      {/*  buttonLink="/projects/slice"*/}
      {/*  model={{*/}
      {/*    type: 'laptop',*/}
      {/*    alt: 'Annotating a biomedical image in the Slice app',*/}
      {/*    textures: [*/}
      {/*      {*/}
      {/*        srcSet: [sliceTexture, sliceTextureLarge],*/}
      {/*        placeholder: sliceTexturePlaceholder,*/}
      {/*      },*/}
      {/*    ],*/}
      {/*  }}*/}
      {/*/>*/}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
