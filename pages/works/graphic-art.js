import { motion } from 'framer-motion';
import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';
import styles from './art.module.scss';

const header = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { y: -30, opacity: 0 },
};

const main = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: { y: 30, opacity: 0 },
};

export default function graphicArt() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
      }}
    >
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={header}
        className={styles.header}
      >
        <Header title='Graphic Art' />
        <WorksHeader />
      </motion.div>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={main}
        className={styles.main}
      >
        <Work category='graphicArt' />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
