import Head from 'next/head';
import HomeHeader from '../components/HomeHeader';
import HomeImage from '../components/HomeImage';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roksana Machowska</title>
      </Head>

      <HomeHeader />
      <HomeImage />
      <Menu />
      <Footer />
    </>
  );
}
