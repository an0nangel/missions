import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <nav className={styles.nav}>
      <section className={styles.opt_container}>
        <a href="/"><img src="/logo.png" alt="logo" className={styles.logo} /></a>

        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><a href=".">Explore</a></li>
          <li className={styles.nav_item}><a href=".">Log In</a></li>
          <li className={styles.nav_item}><a href=".">Sign Up</a></li>
          <li className={styles.nav_item}><a href=".">Help</a></li>
        </ul>
      </section>

      <button className={styles.start_button}>
        Start Now
      </button>
    </nav>
  );
}