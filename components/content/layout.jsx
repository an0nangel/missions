import styles from './Layout.module.css'

export default function Layout({children, props}) {
  return <section id={styles.layout}>{children}</section>
}
