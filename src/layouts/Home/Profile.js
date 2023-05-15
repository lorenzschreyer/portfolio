import profileImgLarge from 'assets/profile-3-large.png';
import profileImgPlaceholder from 'assets/profile-3-placeholder.png';
import profileImg from 'assets/profile-3.png';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hey there," start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        My name is Lorenz, a software developer from Germany and i am currently studying computer science
        in the 6th semester at the <Link href="https://www.thi.de/">Technische Hochschule Ingolstadt</Link>.
        Check out my <Link href="/uses">uses page</Link>, if you want to know more about the software and hardware i use.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        Besides my passion for programming, i like to take photos and edit them, or do sports.
        I am interested in many areas of computer science, which makes me never stop learning.
        One of my principles is a very good quote:
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        «Simplicity is prerequisite for reliability.» <br/>
        ― Edsger W. Dijkstra
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact me
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Louvre in Paris"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
