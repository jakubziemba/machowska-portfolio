import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Submenu.module.scss';

export default function Works() {
  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        ease: 'easeInOut',
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className={styles.works}>
      <motion.ul initial='hidden' animate='visible' variants={list}>
        <motion.li variants={item}>
          <Link href='/works/paintings'>Paintings</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/works/graphic-art'>Graphic Art</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/works/posters'>Posters</Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}
