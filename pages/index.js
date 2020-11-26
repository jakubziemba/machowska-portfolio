import Image from 'next/image';
import HomeHeader from '../components/HomeHeader';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <HomeHeader />
      </div>
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
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  );
}
