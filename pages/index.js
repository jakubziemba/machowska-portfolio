import { motion } from 'framer-motion';
import Image from 'next/image';
import HomeHeader from '../components/HomeHeader';
import Menu from '../components/Menu';
import styles from './home.module.scss';

const content = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 1, delayChildren: 2 },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0, 0.55, 0.45, 1], duration: 0.2 },
  },
};

const header = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { y: -30, opacity: 0 },
};

const image = {
  initial: { x: 30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1.3,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { x: 30, opacity: 0 },
};

const menu = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { x: -30, opacity: 0 },
};

export default function Home() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={content}
      exit='exit'
      className={styles.siteWrapper}
    >
      <motion.div
        key='header'
        initial='initial'
        animate='animate'
        exit='exit'
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
          exit='exit'
          variants={image}
          loading='eager'
        >
          <Image
            src='/images/me.jpg'
            quality={100}
            width={999}
            height={1500}
            layout='responsive'
            alt='Photo of Roksana Machowska'
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
      </div>
    </motion.div>
  );
}
