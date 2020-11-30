import { motion } from 'framer-motion';
import Image from 'next/image';
import HomeHeader from '../components/HomeHeader';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './home.module.scss';

const blackBox = {
  initial: {
    height: '150vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className={styles.introContainer}>
      <motion.div
        className={styles.intro}
        initial='initial'
        animate='animate'
        variants={blackBox}
        onAnimationStart={() =>
          (document.body.style.overflow = 'hidden')
        }
        onAnimationComplete={() =>
          (document.body.style.overflow = 'visible')
        }
      ></motion.div>
    </div>
  );
};

const content = {
  animate: {
    transition: { staggerChildren: 0.2, delayChildren: 2.8 },
  },
};

const header = {
  initial: { scale: 0.95, x: -30, opacity: 0 },
  animate: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 3.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const image = {
  initial: { scale: 0.95, y: -20, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const menu = {
  initial: { scale: 0.95, y: -30, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Home() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={content}
      exit={{ opacity: 0 }}
      className={styles.siteWrapper}
    >
      <InitialTransition />
      <motion.div
        initial='initial'
        animate='animate'
        variants={header}
        className={styles.header}
      >
        <HomeHeader />
      </motion.div>
      <div className={styles.main}>
        <motion.div
          className={styles.imageContainer}
          initial='initial'
          animate='animate'
          variants={image}
        >
          <Image
            src='/images/me.jpg'
            quality={100}
            width={1333}
            height={2000}
            layout='responsive'
            priority={true}
            alt='Photo of Roksana Machowska'
          />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={menu}
          className={styles.menu}
        >
          <Menu />
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
