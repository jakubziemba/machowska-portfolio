import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeImage from '../components/HomeImage';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roksana Machowska</title>
      </Head>

      <Header />
      <HomeImage />
      <Menu />
      <Footer />
    </Layout>
  );
}
