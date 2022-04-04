import Head from 'next/head'
import Navbar from '../components/navbar/navbar.jsx'
import Banner from '../components/banner/banner.jsx'

export default function Home() {
  return(
    <>
      <Head>
        <title>Missions | Home</title>
      </Head>
      <Navbar />
      <Banner />

      <h1>Hello World!</h1>
    </>
  );
}
