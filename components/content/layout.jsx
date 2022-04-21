import styles from './Layout.module.css'

export default function Layout({children, props}) {
  return <section class={styles.layout}>{children}</section>
}
