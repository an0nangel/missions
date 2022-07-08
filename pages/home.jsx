import Head from 'next/head';
import Navbar from '../components/navbar/navbar.jsx';
import Banner from '../components/banner/banner.jsx';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    < >
      <Head>
        <title>Missions | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
    </>
  );
}
