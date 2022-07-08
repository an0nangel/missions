import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';


function handleClick(state, setState) {
  setState(!state);
}


export default function Navbar() {
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <header>
      <section className={styles.mobile_container} id={dropdown ? styles.show : null}>
        <ul className={styles.mnav_list}>
          <li className={styles.nav_item}><Link href="explore">Explore</Link></li>
          <li className={styles.nav_item}><Link href="login">Log In</Link></li>
          <li className={styles.nav_item}><Link href="signup">Sign Up</Link></li>
          <li className={styles.nav_item}><Link href="help">Help</Link></li>
        </ul>

        <button className={styles.start_button}>
          Start Now
        </button>
      </section>

      <nav className={styles.nav}>
        <section className={styles.opt_container}>
          <Link href="/"  className={styles.logo} passHref><Image src="/logo.png" alt="logo" width={115} height={55} /></Link>

          <ul className={styles.nav_list}>
            <li className={styles.nav_item}><Link href="explore">Explore</Link></li>
            <li className={styles.nav_item}><Link href="login">Log In</Link></li>
            <li className={styles.nav_item}><Link href="signup">Sign Up</Link></li>
            <li className={styles.nav_item}><Link href="help">Help</Link></li>
          </ul>
        </section>

        <button className={styles.menu_button} onClick={() => handleClick(dropdown, setDropdown)}>
          <Image src="/menu.png" alt="menu" width={48} height={48} />
        </button>

        <button className={styles.start_button}>
          Start Now
        </button>
      </nav>
    </header>
  );
}