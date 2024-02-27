import { Button } from 'components/Button';
import styles from './LanguageToggle.module.css';
import { useTranslation } from "react-i18next";

export const LanguageToggle = ({ isMobile, ...rest }) => {

  const { i18n  } = useTranslation();

  const handleClick = () => {
    if (i18n.language === "en"){
      i18n.changeLanguage("de");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <Button
      iconOnly
      className={styles.toggle}
      data-mobile={isMobile}
      aria-label="Toggle language"
      onClick={handleClick}
      {...rest}
    >
      {i18n.language === "en" ? "de" : "en"}
    </Button>
  );
};
