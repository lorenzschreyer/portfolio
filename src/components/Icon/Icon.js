import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import File from './svg/file.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Link from './svg/link.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import Whatsapp from './svg/whatapp.svg';
import Twitter from './svg/twitter.svg';
import Instagram from './svg/instagram.svg';
import LinkedIn from './svg/linkedIn.svg';
import Mail from './svg/mail.svg';
import Location from './svg/location.svg';
import Web from './svg/web.svg';
import Phone from './svg/phone.svg';

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  file: File,
  check: Check,
  chevronRight: ChevronRight,
  mail: Mail,
  location: Location,
  web: Web,
  phone: Phone,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  whatsapp: Whatsapp,
  twitter: Twitter,
  instagram: Instagram,
  linkedIn: LinkedIn,
};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
