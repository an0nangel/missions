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

        <section class={styles.explanation}>
        <div class={styles.examplebox}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oKIPpFhwsMNrRIjN6%2Fgiphy.gif" alt="Network expanding!" />
        </div>
        <p>With a decentralised network it will be very easy to start! Not only that but your privacy will be valued as well!</p>
        </section>
      </Layout>

      <svg id={styles.svg1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#030c15" fill-opacity="1" d="M0,64L24,96C48,128,96,192,144,197.3C192,203,240,149,288,138.7C336,128,384,160,432,165.3C480,171,528,149,576,122.7C624,96,672,64,720,96C768,128,816,224,864,245.3C912,267,960,213,1008,202.7C1056,192,1104,224,1152,240C1200,256,1248,256,1296,245.3C1344,235,1392,213,1416,202.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      <div class={styles.darkBlue_bg}>
        <Layout>
          <Title><p class={styles.lightBlue}>Ease of Use</p></Title>
          <br /><br />
          <p class={styles.content_dark}>Don't have a <span class={styles.lightBlue}>credit card</span>? No problem, everything here works on <span class={styles.lightBlue}>Etherium</span>! The web3
          technology allows anyone to to work or hire! So do not hesitate to join, everything is free! <br />
          But it doesnt just end there! In this platform you can <span class={styles.lightBlue}>work hard</span>, unlike other platforms where, if you aren't hired you don't work, here you can <span class={styles.lightBlue}>grind reputation</span> in your spare time,
          so you waste less time and <span class={styles.lightBlue}>earn more</span>!</p>
        </Layout>
      </div>
      <svg id={styles.svg2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#030c15" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

      <Layout>
        <Title><p class={styles.blazingRed}>Strong Hire</p></Title>
        <br /><br />
        <p class={styles.content}>And for every buisiness owner or anyone who <span class={styles.blazingRed}>wants to hire</span>, we also made things easier here! They can be rest assured that they will hire strong ninjas with the <span class={styles.blazingRed}>will of fire</span>!
        Because this platform can be used by anyone, <span class={styles.blazingRed}>hidden talents</span> will show up here more than anywhere else!</p>
      </Layout>
    </>
  );
}
