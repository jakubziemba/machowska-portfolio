import { useState } from 'react';
import Link from 'next/link';
import Works from './MenuItems/Works';
import styles from './Menu.module.scss';

export default function Menu() {
  const [worksActive, setWorksActive] = useState(false);

  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li
          className={worksActive ? styles.active : undefined}
          onClick={() => setWorksActive(!worksActive)}
        >
          <Link href='#'>Works</Link>
        </li>
        {worksActive && <Works />}
        <li>
          <Link href='/exhibitions'>Exhibitions</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
