import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Lorenz Schreyer.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        credits
      </Link>
      <span style={{marginRight: '20px'}}></span>
      <Link primary className={styles.link} href="/imprint-privacypolicy" target="_self">
        imprint & privacy policy
      </Link>
    </Text>
  </footer>
);
