import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar.jsx'
import Banner from '../components/banner/banner.jsx'

// Textual Content
const content = {

}


export default function Home() {
  return(
    <>
      <Head>
        <title>Missions | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />

      <div className={styles.trustedContainer}>
        <section className={styles.trusted}>
          <div>
            <h2>Trusted by</h2>
            <h2>the Open Source Community</h2>
            <div className={styles.rating}>
              <Image src="/images/star.png" alt="a star for rating" width={44} height={44} />
              <Image src="/images/star.png" alt="a star for rating" width={44} height={44} />
              <Image src="/images/star.png" alt="a star for rating" width={44} height={44} />
              <Image src="/images/star.png" alt="a star for rating" width={44} height={44} />
              <Image src="/images/star.png" alt="a star for rating" width={44} height={44} />
            </div>
          </div>

          <div className={styles.trustedLogos}>
            <Image src="/images/github.png" alt="GitHub" width={100} height={100} />
            <Image src="/images/gitlab.png" alt="GitLab" width={100} height={100} />
          </div>
        </section>
      </div>

      { /* Content */ }
      <main>

      </main>
    </>
  );
}
