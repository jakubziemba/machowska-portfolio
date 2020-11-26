import Header from '../components/Header';
import Image from 'next/image';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div>
      <div className={styles.header}>
        <Header title='Contact' />
      </div>
      <div className={styles.main}>
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
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.container}>
          <p>
            If you’d like to buy my works or you’re interested in
            working together, feel free to send me a message via email
            or Instagram DM.
          </p>
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
      </div>
      <Footer />
    </div>
  );
}
