import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Work from './work';
import styles from './paintings.module.scss';

export default function Paintings() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <div className={styles.header}>
        <h1>Paintings</h1>
      </div>
      <Work />
    </div>
  );
}
