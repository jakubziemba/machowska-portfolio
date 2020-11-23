import Link from 'next/link';
import { useState } from 'react';
import About from './MenuItems/About';
import Works from './MenuItems/Works';
import Exhibitions from './MenuItems/Exhibitions';
import Contact from './MenuItems/Contact';
import styles from './Menu.module.scss';

export default function Menu() {
  const [worksActive, setWorksActive] = useState(false);

  return (
    <div className={styles.menu}>
      <ul>
        <Link href='/about'>
          <li>
            <a>About</a>
          </li>
        </Link>
        <li
          className={worksActive ? styles.active : undefined}
          onClick={() => setWorksActive(!worksActive)}
        >
          Works
        </li>
        {worksActive && <Works />}
        <Link href='/exhibitions'>
          <li>Exhibitions</li>
        </Link>
        <Link href='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
