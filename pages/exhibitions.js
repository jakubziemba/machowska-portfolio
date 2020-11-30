import { motion } from 'framer-motion';
import Header from '../components/Header';
import Image from 'next/image';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import {
  prizes,
  soloExhibition,
  groupExhibition,
} from '../lib/resources';
import styles from './exhibitions.module.scss';

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
              {/* <p>{entry.body}</p>
              <p>{entry.location}</p> */}
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

export default function Exhibitions() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
      }}
    >
      <div className={styles.header}>
        <Header title='Exhibitions' />
      </div>
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src='/images/sketch2.png'
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
        <div className={styles.containerWrapper}>
          <Prizes />
          <SoloExhibition />
          <GroupExhibition />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
