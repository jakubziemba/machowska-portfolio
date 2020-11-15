import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.menu}>Menu</p>

      <Link href='/'>
        <a className={styles.home}>
          Roksana <br /> Machowska
        </a>
      </Link>
    </header>
  );
}
