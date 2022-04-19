import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar.jsx'
import Banner from '../components/banner/banner.jsx'
import Title from '../components/content/title.jsx'
import Layout from '../components/content/layout.jsx'

export default function Home() {
  return(
    <>
      <Head>
        <title>Missions | Home</title>
      </Head>
      <Navbar />
      <Banner />
      <Layout>
        <Title class={styles.darkBlue}><p class={styles.darkBlue}>Hello World!</p></Title>
        <br /><br />
        <p>loremloremloremlorem <span id={styles.highlight} class={styles.highlight_blue}>loremloremloremlor</span> emloremloremloremloremloremloremlorem lorem loremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem loremloremlorem  loremloremloremloremloremloremloremvloremloremloremloremlorem  vlorem </p>
      </Layout>
    </>
  );
}
