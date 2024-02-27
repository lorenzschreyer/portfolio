import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';


export const Footer = ({ className, iandpp_name }) => (

  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Lorenz Schreyer.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        credits
      </Link>
      <span style={{marginRight: '20px'}}></span>
      <Link primary="true" className={styles.link} href="/imprint-privacypolicy" target="_self">

        {iandpp_name}
      </Link>
    </Text>
  </footer>
);
