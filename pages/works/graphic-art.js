import { motion } from 'framer-motion';
import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';
import styles from './art.module.scss';

export default function graphicArt() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
      }}
    >
      <div className={styles.header}>
        <Header title='Graphic Art' />
        <WorksHeader />
      </div>
      <div className={styles.main}>
        <Work category='graphicArt' />
      </div>
      <Footer />
    </motion.div>
  );
}
