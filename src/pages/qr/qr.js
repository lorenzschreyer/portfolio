import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './qr.module.css';
import { Section } from 'components/Section';
import { ReactSVG } from 'react-svg';
import Businesscard from 'assets/businesscard.svg';
import {classes} from "../../utils/style";

export function Qr() {
  return (
    <section className={styles.page}>
      <Meta
        title="QR-Code"
        description="QR-Code Landing page from businesscard"
      />
      <Transition in>
        {visible => (
          <Fragment>
            <Section className={classes(styles.sectionInner, styles.page)} data-padding={"both"}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  Digital Business Card
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={3}
                >

                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                  <DecoderText text="Just click on the information on the business card to contact me" start={visible} delay={300} />
                </Text>
                <div className={styles.buttons}>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="https://www.google.com/maps/dir//Hauptstra%C3%9Fe%2057,%2085309%20Puch"
                    icon="location"
                  >
                    navigate to me
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="tel:+4917634285299"
                    icon="phone"
                  >
                    call me
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="mailto:dev@lorenzschreyer.de"
                    icon="mail"
                  >
                    send mail
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="https://lorenzschreyer.de"
                    icon="web"
                  >
                    visit Homepage
                  </Button>

                </div>

              </div>
            </Section>
            <div className={styles.businesscard} data-visible={visible}>
              {/*<Businesscard />*/}
              {/*<video*/}
              {/*  autoPlay*/}
              {/*  muted*/}
              {/*  loop*/}
              {/*  playsInline*/}
              {/*  className={styles.video}*/}
              {/*  data-visible={visible}*/}
              {/*  poster={notFoundPoster.src}*/}
              {/*>*/}
              {/*  <source src={notFoundVideo} type="video/mp4" />*/}
              {/*</video>*/}
              {/*<a*/}
              {/*  className={styles.credit}*/}
              {/*  data-visible={visible}*/}
              {/*  href="https://www.videezy.com/technology/41786-hacker-code-running-down"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  Animation from videezy*/}
              {/*</a>*/}
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}
