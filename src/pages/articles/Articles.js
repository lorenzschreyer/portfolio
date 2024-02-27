import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import styles from './Articles.module.css';
import {useTranslation} from "react-i18next";

const ArticlesPost = ({
  slug,
  title,
  abstract,
  date,
  featured,
  banner,
  timecode,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          {t('featured')}
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{ src: banner }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink
        href={`/articles/${slug}`}
        scroll={false}
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {dateTime}
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>
          <Text size={featured ? 'l' : 's'} as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              {t('read_article')}
            </Button>
            <Text className={styles.timecode} size="s">
              {timecode}
            </Text>
          </div>
        </div>

      </RouterLink>
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          {t('featured_extra')}
        </Text>
      )}
    </article>
  );
};

const SkeletonPost = ({ index }) => {
  const { t } = useTranslation();

  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {t('coming_soon')}
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              {t('read_more')}
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Articles = ({ posts, featured_en, featured_de }) => {
  const { i18n, t } = useTranslation();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text={t('articles_latest')} />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {posts.filter(post => post.slug.endsWith(i18n.language)).map(({ slug, ...post }, index) => (
        <ArticlesPost key={slug} slug={slug} index={index} {...post} />
      ))}
      {Array(2)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost key={index} />
        ))}
    </div>
  );

  const featuredPosten =
    <ArticlesPost {...featured_en} />;

  const featuredPostde =
    <ArticlesPost {...featured_de} />;

  return (
    <article className={styles.articles}>
      <Meta
        title={t('articles_title')}
        description={t('articles_description')}
      />
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {i18n.language==="en" ? featuredPosten : featuredPostde}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {/*{i18n.language==="en" ? featuredPosten : featuredPostde}*/}
            {postList}
          </div>
        )}
      </Section>
      <Footer iandpp_name={t('iandpp_name')}/>
    </article>
  );
};
