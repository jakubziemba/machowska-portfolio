import Link from 'next/link';
import styles from './HomeHeader.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.home}>Roksana Machowska</a>
      </Link>
    </header>
  );
}
