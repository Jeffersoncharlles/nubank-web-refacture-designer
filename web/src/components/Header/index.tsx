import { useState } from 'react';
import { Button } from '../Button';
import styles from './styles.module.scss'

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
            <li>
              <a href="" className={styles.nav_link}>Nubank</a>
              <ul className={styles.dropdown_menu}>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>O Nu</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Carreiras</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Impressa</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="" className={styles.nav_link}>Conta Digital</a>
              <ul className={styles.dropdown_menu}>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Crie sua conta</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Transferências</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Rendimento</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="" className={styles.nav_link}>Pra você</a>
              <ul className={styles.dropdown_menu}>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Comunidade</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Rewards</a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>Novidades</a>
                </li>
              </ul>
            </li>

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
