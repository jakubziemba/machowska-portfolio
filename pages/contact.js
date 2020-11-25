import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <>
      <Header title='Contact' />
      <div className={styles.imageContainer}>
        <Image
          src='/images/sketch1.png'
          quality={100}
          width={668}
          height={1000}
          layout='responsive'
          priority={true}
          alt='A picture of Sketches'
        />
      </div>
      <div className={styles.contact}>
        <h2>Email:</h2>{' '}
        <a href='mailto:roksana1159@gmail.com'>
          <h3 className={styles.link}>roksana1159@gmail.com</h3>
        </a>
        <h2>Instagram: </h2>{' '}
        <a
          href='https://instagram.com/roksana_machowska'
          target='_blank'
          rel='noreferrer'
        >
          <h3 className={styles.link}>@roksana_machowska</h3>
        </a>
      </div>
      <Footer />
    </>
  );
}
