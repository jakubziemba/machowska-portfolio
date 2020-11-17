import { useState } from 'react';
import About from './MenuItems/About';
import Works from './MenuItems/Works';
import Exhibitions from './MenuItems/Exhibitions';
import Contact from './MenuItems/Contact';
import styles from './Menu.module.scss';

export default function Menu() {
  const [aboutActive, setAboutActive] = useState(false);
  const [worksActive, setWorksActive] = useState(false);
  const [exActive, setExActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <div className={styles.menu}>
      <ul>
        <li
          className={aboutActive ? styles.active : undefined}
          onClick={() => setAboutActive(!aboutActive)}
        >
          About
        </li>
        {aboutActive && <About />}
        <li
          className={worksActive ? styles.active : undefined}
          onClick={() => setWorksActive(!worksActive)}
        >
          Works
        </li>
        {worksActive && <Works />}
        <li
          className={exActive ? styles.active : undefined}
          onClick={() => setExActive(!exActive)}
        >
          Exhibitions
        </li>
        {exActive && <Exhibitions />}{' '}
        <li
          className={contactActive ? styles.active : undefined}
          onClick={() => setContactActive(!contactActive)}
        >
          Contact
        </li>
        {contactActive && <Contact />}
      </ul>
    </div>
  );
}
