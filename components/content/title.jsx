import styles from './Title.module.css'

export default function Title({ props, children }) {
    return(
      <h1 id={styles.title}>{children}</h1>
    );
}
