import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';
import styles from './styles.module.scss'
import { menuDropDown } from '../../utils/dropdown'

export const Header = () => {
  const [scrollActive, setScrollActive] = useState(false)


  const handleScroll = (e: any) => {
    window.scrollY >= 50 ? setScrollActive(true) : setScrollActive(false)
  }

  window.addEventListener('scroll', handleScroll);



  return (
    <header className={`${styles.container} ${scrollActive ? styles.active : ''}`} >

      <nav className={styles.container_mobile}>
        <div className={styles.bx} id="bx">

        </div>
        <div className={styles.logo}>

        </div>
        <a href="">Login</a>
      </nav>

      <nav className={styles.container_desktop}>
        <div className={styles.container_desktop_item1}>
          <div className={styles.logo}>

          </div>
          <ul className={styles.menu}>

            {menuDropDown.map((item) => (
              <Dropdown key={item.title} title={item.title} navMenu={item.navMenu} />
            ))}

          </ul>
        </div>

        <div className={styles.container_desktop_item2}>
          <Button title='Quero ser Nubank' />
          <button>Login</button>
        </div>
      </nav>

      <nav className={styles.menu_mobile}>
        <ul className={styles.menu_mobile_list}>
          <li>
            <a href="" className={styles.menu_mobile_list_link}>
              Nubank
            </a>
          </li>
          <li>
            <a href="" className={styles.menu_mobile_list_link}>
              Conta Digital
            </a>
          </li>
          <li>
            <a href="" className={styles.menu_mobile_list_link}>
              Pra você
            </a>
          </li>
          <li>
            <a href="" className={styles.menu_mobile_list_link}>
              Quero ser Nubank
            </a>
          </li>
          <li>
            <a href="" className={styles.menu_mobile_list_link}>
              Redes Sociais
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
