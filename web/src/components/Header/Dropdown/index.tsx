import styles from './styles.module.scss'

import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  navMenu: {
    navTile: string
  }[]
}

export const Dropdown = ({ title, navMenu }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const toggleShowHide = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <li className={styles.menu_item} id="menu-item-1" data-aos="fade-up" data-aos-delay="200">
      <a
        className={styles.nav_link_desktop}
        onMouseEnter={toggleShowHide}
        onMouseLeave={toggleShowHide}
        onClick={toggleShowHide}
      >{title}</a>
      <ul className={`${styles.nav_link_desktop_dropdown_menu} ${openDropdown ? styles.active_menu : ''}`} id="dropdown-item-1">
        {navMenu && <>
          {navMenu.map((item, key) => (
            <li className={styles.dropdown_item} key={item.navTile}>
              <a href="" className={styles.nav_link_dropdown}>{item.navTile}</a>
            </li>
          ))}
        </>}
      </ul>
    </li>

  );
}
