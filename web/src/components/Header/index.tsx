import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';
import styles from './styles.module.scss'
import { menuDropDown } from '../../utils/dropdown'
import { mobileMenu } from '../../utils/dropdown'
import { NavMobile } from './NavMobile';
import LogoNU from '../../assets/logonu.svg'

import Logo from '../../assets/Logo'




export const Header = () => {
  const [scrollActive, setScrollActive] = useState(false)
  const [showingBurger, setShowingBurger] = useState(false)


  const handleScroll = (e: any) => {
    window.scrollY >= 50 ? setScrollActive(true) : setScrollActive(false)

  }

  window.addEventListener('scroll', handleScroll);

  const handleShowingBurger = () => {
    setShowingBurger(!showingBurger)
  }





  return (
    <header className={`${styles.container} ${scrollActive ? styles.active_header : ''}`} >

      <nav className={styles.container_desktop} data-aos="fade-up">
        <div className={styles.container_desktop_item1}>
          <div className={styles.logo}>
            <a href="/">
              <Logo />
            </a>
          </div>

          <ul className={styles.menu}>
            {menuDropDown.map((item) => (
              <Dropdown key={item.title} title={item.title} navMenu={item.navMenu} />
            ))}
          </ul>

        </div>

        <div className={styles.container_desktop_item2}>
          <Button title='Quero ser Nubank' />
          <button className={styles.login}>Login</button>
        </div>
      </nav>

      <nav className={styles.container_mobile}>
        <div className={showingBurger ? styles.active_bx : styles.bx} id="bx" onClick={handleShowingBurger}></div>
        <div className={styles.logo2}>
          <img src={LogoNU} alt="" />
        </div>
        <a href="">Login</a>
      </nav>


      <NavMobile data={mobileMenu} showMe={showingBurger} />
    </header>
  );
}
