import Link from 'next/link';
import styles from './worksHeader.module.scss';

export default function WorksHeader() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href='/works/paintings'>Paintings</Link>
        </li>
        <li>
          <Link href='/works/graphic-art'>Graphic Art</Link>
        </li>
        <li>
          <Link href='/works/posters'>Posters</Link>
        </li>
      </ul>
    </div>
  );
}
