import { groupExhibition, prizes, soloExhibition } from '../lib/resources';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';
import styles from './exhibitions.module.scss';
import { useMediaQuery } from 'react-responsive';

function Prizes() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Prizes</h2>
      {prizes.map((prize, index) => (
        <div className={styles.wrapper} key={index}>
          <h3>{prize.year}</h3>
          {prize.entries.map((entry, index) => (
            <div className={styles.entry} key={index}>
              <ul>
                <li>{entry.body}</li>
                <p>{entry.location}</p>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SoloExhibition() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Solo Exhibition</h2>
      {soloExhibition.map((ex, index) => (
        <div className={styles.wrapper} key={index}>
          <h3>{ex.year}</h3>
          {ex.entries.map((entry, index) => (
            <div className={styles.entry} key={index}>
              <ul>
                <li>{entry.body}</li>
                <p>{entry.location}</p>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function GroupExhibition() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Group Exhibition</h2>
      {groupExhibition.map((grEx, index) => (
        <div className={styles.wrapper} key={index}>
          <h3>{grEx.year}</h3>
          {grEx.entries.map((entry, index) => (
            <div className={styles.entry} key={index}>
              <ul>
                <li>{entry.body}</li>
                <p>{entry.location}</p>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const header = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { y: -20, opacity: 0 },
};

const image = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: { opacity: 0 },
};

const text = {
  initial: { x: 30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: { x: 30, opacity: 0 },
};

const textMobile = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1.3,
      ease: [0.6, -0.05, 0.01, 0.99],
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
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: { x: -30, opacity: 0 },
};

export default function Exhibitions() {
  const isMobile = useMediaQuery({ maxWidth: 667 });
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] },
      }}
    >
      <motion.div initial='initial' animate='animate' exit='exit' variants={header} className={styles.header}>
        <Header title='Exhibitions' />
      </motion.div>
      <div className={styles.main}>
        <motion.div initial='initial' animate='animate' exit='exit' variants={image} className={styles.imageContainer}>
          <Image
            src='/images/sketch2.png'
            quality={100}
            width={668}
            height={1000}
            layout='responsive'
            alt='A picture of Sketches'
          />
        </motion.div>
        <motion.div initial='initial' animate='animate' exit='exit' variants={menu} className={styles.menu}>
          <Menu />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={isMobile ? textMobile : text}
          className={styles.containerWrapper}
        >
          <Prizes />
          <SoloExhibition />
          <GroupExhibition />
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
