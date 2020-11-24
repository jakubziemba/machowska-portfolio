import Head from 'next/head';
import Image from 'next/image';
import HomeHeader from '../components/HomeHeader';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './image.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roksana Machowska</title>
      </Head>

      <HomeHeader />
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src='/images/me.png'
            quality={100}
            width={668}
            height={1000}
            layout='responsive'
            priority={true}
            alt='Photo of Roksana Machowska'
          />
        </div>
        <Menu />
      </div>
      <Footer />
    </div>
  );
}
