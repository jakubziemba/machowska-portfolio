import Head from 'next/head';
import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import HomeImage from '../components/HomeImage';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roksana Machowska</title>
      </Head>

      <HomeHeader />
      <HomeImage />
      <Menu />
      <Footer />
    </Layout>
  );
}
