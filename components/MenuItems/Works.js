import Link from 'next/link';
import styles from './Submenu.module.scss';

export default function Works() {
  return (
    <div className={styles.works}>
      <li>
        <Link href='/works/paintings'>Paintings</Link>
      </li>
      <li>Graphic Art</li>
      <li>Posters</li>
    </div>
  );
}
