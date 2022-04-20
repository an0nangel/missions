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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Banner />

      <Layout>
        <Title><p class={styles.darkBlue}>Start Working Now</p></Title>
        <br /><br />
        <p class={styles.content}>The <span class={styles.darkBlue}>best freelancing</span> service can be found here! <span class={styles.darkBlue}>Ninjas</span> from all over the world can come here to <span class={styles.darkBlue}>work on missions</span>!
        Whether it's <span class={styles.darkBlue}>toggether or alone</span>, ninjas will always be able to <span class={styles.darkBlue}>find work</span>!</p>
      </Layout>

      <div class={styles.darkBlue_bg}>
        <Layout>
          <Title><p class={styles.lightBlue}>Ease of Use</p></Title>
          <br /><br />
          <p class={styles.content_dark}>Don't have a <span class={styles.lightBlue}>credit card</span>? No problem, everything here works on <span class={styles.lightBlue}>Etherium</span>! The web3
          technology allows anyone to to work or hire! So do ot hesitate to join, everything is free! <br />
          But it doesnt just end there! In this platform you can <span class={styles.lightBlue}>work hard</span>, unlike other platforms where, if you aren't hired you don't work, here you can <span class={styles.lightBlue}>grind reputation</span> in your spare time,
          so you waste less time and <span class={styles.lightBlue}>earn more</span>!</p>
        </Layout>
      </div>

      <Layout>
        <Title><p class={styles.blazingRed}>Strong Hire</p></Title>
        <br /><br />
        <p class={styles.content}>And for every buisiness owner or anyone who <span class={styles.blazingRed}>wants to hire</span>, we also made things easier here! They can be rest assured that they will hire strong ninjas with the <span class={styles.blazingRed}>will of fire</span>!
        Because this platform can be used by anyone, <span class={styles.blazingRed}>hidden talents</span> will show up here more than anywhere else!</p>
      </Layout>
    </>
  );
}
