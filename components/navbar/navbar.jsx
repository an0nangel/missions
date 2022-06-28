import styles from './Navbar.module.css'


export default function Navbar() {
  return(
    <>
      <nav class={styles.container}>
        <section class={styles.logo_container}>
          <a href="."><p class={styles.logo}>Missions</p></a>
        </section>

        <section class={styles.options_container}>
          <ul class={styles.options_list}>
            <a href="."><li class={styles.options}>Log In</li></a>
            <a href="."><li class={styles.options}>Sign Up</li></a>
            <a href="."><li class={styles.options}>Help</li></a>
          </ul>
        </section>

        <section class={styles.start}>
          <a href=".">Get Started</a>
        </section>

        <section class={styles.menu}>
          <button class={styles.menu_button}>
            <img src="https://vectorified.com/images/hamburger-nav-icon-9.png" width="44px" />
          </button>

          <div class={styles.dropdown}>
            <ul class={styles.drop_options}>
              <a href="."><li class={styles.options}>Log In</li></a>
              <a href="."><li class={styles.options}>Sign Up</li></a>
              <a href="."><li class={styles.options}>Help</li></a>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
}
