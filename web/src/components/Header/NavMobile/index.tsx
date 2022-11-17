import styles from './styles.module.scss'

interface Props {
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
      </ul>
    </nav>
  );
}
