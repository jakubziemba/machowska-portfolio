import { motion } from 'framer-motion';
import Header from '../components/Header';
import Image from 'next/image';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './contact.module.scss';

const header = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.4,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { y: -10, opacity: 0 },
};

const image = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: { x: 50, opacity: 0 },
};

const menu = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: { x: -30, opacity: 0 },
};

export default function Contact() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] },
      }}
    >
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={header}
        className={styles.header}
      >
        <Header title='Contact' />
      </motion.div>
      <div className={styles.main}>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={image}
          className={styles.imageContainer}
        >
          <Image
            src='/images/sketch1.png'
            quality={100}
            width={668}
            height={1000}
            layout='responsive'
            priority={true}
            alt='A picture of Sketches'
          />
        </motion.div>

        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={menu}
          className={styles.menu}
        >
          <Menu />
        </motion.div>
        {/* Using 'image' variant for text container, as I want exact the same animation effect */}
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={image}
          className={styles.container}
        >
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
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
