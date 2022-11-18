import styles from './styles.module.scss'
// import InstagramLogo from '../../../assets/icon-instagram.svg'
// import FacebookLogo from '../../../assets/icon-facebook.svg'
// import TwitterLogo from '../../../assets/icon-twitter.svg'
// import YoutubeLogo from '../../../assets/icon-youtube.svg'

import InstagramLogo from '../../../assets/icons/Instagram'
import FacebookLogo from '../../../assets/icons/Facebook'
import TwitterLogo from '../../../assets/icons/Twitter'
import YoutubeLogo from '../../../assets/icons/Youtube'

interface Props extends React.HTMLAttributes<HTMLDListElement> {
  data: {
    title: string;
    link: string;
  }[];
  showMe?: boolean;
}

export const NavMobile = ({ data, showMe = false }: Props) => {

  return (
    <nav className={`${styles.menu_mobile} ${showMe ? styles.active_mobile : ''}`}>
      <ul className={styles.menu_mobile_list}>
        {data.map((item) => (
          <li key={item.title}>
            <a href={item.link} className={styles.menu_mobile_list_link}>
              {item.title}
            </a>
          </li>
        ))}
        <li className={styles.socials}>
          <a href=""><InstagramLogo /></a>
          <a href=""><FacebookLogo /></a>
          <a href=""><TwitterLogo /></a>
          <a href=""><YoutubeLogo /></a>
        </li>
      </ul>
    </nav>
  );
}
