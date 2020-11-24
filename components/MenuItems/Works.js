import Link from 'next/link';
import styles from './Submenu.module.scss';

export default function Works() {
  return (
    <div className={styles.works}>
      <li>
        <Link href='/works/paintings'>Paintings</Link>
      </li>
      <li>
        <Link href='/works/graphic-art'>Graphic Art</Link>
      </li>
      <li>
        <Link href='/works/posters'>Posters</Link>
      </li>
    </div>
  );
}
