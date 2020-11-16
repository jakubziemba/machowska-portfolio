import { useState } from 'react';
import styles from './Menu.module.scss';

export default function Menu() {
  const [aboutActive, setAboutActive] = useState(false);
  const [worksActive, setWorksActive] = useState(false);
  const [exActive, setExActive] = useState(false);

  console.log(exActive);
  return (
    <div className={styles.menu}>
      <ul>
        <li onClick={() => setAboutActive(!aboutActive)}>About</li>
        <div className={aboutActive && styles.active}>
          <p className={styles.text}>
            Roksana Machowska, was born in 1996 in Warsaw. She holds a
            Master of Fine Arts. She obtained eight scholarships for
            the best students for the artistic achievements: from the
            Rector of the Maria Grzegorzewska University in Warsaw
            (2016–2020), from the Capital City of Warsaw (2016–2019),
            and the Minister of Science and Higher Education (2020).
            She works in a variety of mediums: printmaking, digital
            graphics, painting, artistic fabric, design and
            installation. Her work for the bachelor’s thesis in Fine
            Arts was a series of graphics “Tamed element”. She took
            part in some group shows and held her solo exhibitions as
            well; including one at the Władysław Hasior Gallery in
            Zakopane (branch of the Tatra Museum), or at the Capital
            Centre for Cultural Education in Warsaw. In her works she
            is inspired by nature and abstraction forms.
          </p>
        </div>
        <li onClick={() => setWorksActive(!worksActive)}>Works</li>
        <div
          className={`${worksActive ? styles.active : null} ${
            styles.works
          }`}
        >
          <li>Paintings</li>
          <li>Graphic Art</li>
          <li>Posters</li>
        </div>
        <li onClick={() => setExActive(!exActive)}>Exhibitions</li>
        <div className={exActive ? styles.active : null}>
          <h3>Prizes</h3>
          <p className={styles.text}>
            2020
            <br />
            Scholarships for the artistic achievements, from the
            Minister of Science and Higher Education, Warsaw, Poland
            <br />
            <br />
            2020
            <br />
            Scholarships for the artistic achievements, from the
            Rector of the Maria Grzegorzewska University in Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2019
            <br />
            Scholarships for the artistic achievements, the the Rector
            of Maria Grzegorzewska University in Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2019
            <br />
            Scholarships for the artistic achievements, from the
            Capital City of Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2018
            <br />
            Scholarships for the artistic achievements, from the
            Rector of the Maria Grzegorzewska University in Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2018
            <br />
            Scholarships for the artistic achievements, from the
            Capital City of Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2017
            <br />
            Scholarships for the artistic achievements, from the
            Rector of the Maria Grzegorzewska University in Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2017
            <br />
            Scholarships for the artistic achievements, from the
            Capital City of Warsaw,
            <br />
            Warsaw, Poland
            <br />
            <br />
            2016
            <br />
            Art competition, Prize- first prize, the Maria
            Grzegorzewska University in Warsaw,
            <br />
            Warsaw, Poland
          </p>
        </div>
        <li>Contact</li>
      </ul>
    </div>
  );
}
