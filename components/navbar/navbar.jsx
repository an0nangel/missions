import React from 'react';
import Link from 'next/link'
import styles from './Navbar.module.css';


function handleClick(state, setState) {
  setState(!state);
}


export default function Navbar(props) {
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <header>
      <section className={styles.mobile_container} id={dropdown ? styles.show : null}>
        <ul className={styles.mnav_list}>
          <li className={styles.nav_item}><a href=".">Explore</a></li>
          <li className={styles.nav_item}><a href=".">Log In</a></li>
          <li className={styles.nav_item}><a href=".">Sign Up</a></li>
          <li className={styles.nav_item}><a href=".">Help</a></li>
        </ul>

        <button className={styles.start_button}>
          Start Now
        </button>
      </section>

      <nav className={styles.nav}>
        <section className={styles.opt_container}>
          <Link href="/" passHref><img src="/logo.png" alt="logo" className={styles.logo}/></Link>

          <ul className={styles.nav_list}>
            <li className={styles.nav_item}><a href=".">Explore</a></li>
            <li className={styles.nav_item}><a href=".">Log In</a></li>
            <li className={styles.nav_item}><a href=".">Sign Up</a></li>
            <li className={styles.nav_item}><a href=".">Help</a></li>
          </ul>
        </section>

        <button className={styles.menu_button} onClick={() => handleClick(dropdown, setDropdown)}>
          <img src="/menu.png" alt="menu" className={styles.menu_icon} />
        </button>

        <button className={styles.start_button}>
          Start Now
        </button>
      </nav>
    </header>
  );
}