import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeImage from '../components/HomeImage';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roksana Machowska</title>
      </Head>

      <Header />
      <HomeImage />
    </Layout>
  );
}
