import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './paintings.module.scss';

export default function Paintings() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <div className={styles.header}>
        <h1>Paintings</h1>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Shape I / 2020</h2>
        <p className={styles.materials}>
          Acrylic / Printing Ink on canvas.
        </p>
        <p className={styles.size}>100 x 70 cm</p>
      </div>
    </div>
  );
}
