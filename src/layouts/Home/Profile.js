import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import {Button} from 'components/Button';
import {DecoderText} from 'components/DecoderText';
import {Divider} from 'components/Divider';
import {Heading} from 'components/Heading';
import {Image} from 'components/Image';
import {Link} from 'components/Link';
import {Section} from 'components/Section';
import {Text} from 'components/Text';
import {Transition} from 'components/Transition';
import {Fragment, useState} from 'react';
import styles from './Profile.module.css';
import { useTranslation } from "react-i18next";

const ProfileText = ({ visible, titleId, t }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text={t('profile_hello')} start={visible} delay={500} />
    </Heading>
    {/*<Text className={styles.description} data-visible={visible} size="l" as="p">*/}
    {/*    My name is Lorenz, a software developer from Germany and i am currently studying computer science*/}
    {/*    in the 7th semester at the <Link href="https://www.thi.de/">Technische Hochschule Ingolstadt</Link>.*/}
    {/*    Check out my <Link >uses page</Link>, if you want to know more about the software and hardware i use.*/}
    {/*</Text>*/}
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {t('profile_1')}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {t('profile_2')}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {t('profile_3')}
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const { t } = useTranslation();

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
              <ProfileText visible={visible} titleId={titleId} t={t} />
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
                  {t('about_me')}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  alt="This is me"
                />
              </div>
              <div className={styles.contactButtons}>

                <Link href="/uses">{t("uses_page")}</Link>
                <Link href="/qr">{t("bc_page")}</Link>
                <br/>
                {t('contact')}

                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}

                  href="mailto:dev@lorenzschreyer.de"
                  icon="mail"
                >
                  {t('per_email')}
                </Button>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="https://wa.me/4917634285299"
                  icon="whatsapp"
                >
                  {t('per_whatsapp')}
                </Button>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="tel:+4917634285299"
                  icon="phone"
                >
                  {t('per_call')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
