import { Button } from 'components/Button';
// import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './qr.module.css';
import { Section } from 'components/Section';
// import { ReactSVG } from 'react-svg';
// import Businesscard from 'assets/businesscard.svg';
import {classes} from "../../utils/style";
import {useTranslation} from "react-i18next";

export function Qr() {
  const { t } = useTranslation();

  return (
    <section className={styles.page}>
      <Meta
        title={t('qr_title')}
        description={t('qr_description')}
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
                  {t('qr_bc_title')}
                </Heading>

                <Text className={styles.description} as="p">
                  {t('qr_bc_click')}
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
                    {t('qr_bc_click_nav')}
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="tel:+4917634285299"
                    icon="phone"
                  >
                    {t('qr_bc_click_call')}
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="mailto:dev@lorenzschreyer.de"
                    icon="mail"
                  >
                    {t('qr_bc_click_mail')}
                  </Button>
                  <Button
                    primary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="https://lorenzschreyer.de"
                    icon="web"
                  >
                    {t('qr_bc_click_home')}
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
