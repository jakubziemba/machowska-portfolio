import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import {
  prizes,
  soloExhibition,
  groupExhibition,
} from '../lib/resources';
import styles from './image.module.scss';

function Prizes() {
  return (
    <div>
      <h2>Prizes</h2>
      {prizes.map((prize, index) => (
        <div key={index}>
          <h3>{prize.year}</h3>
          <p>{prize.body}</p>
          <p>{prize.location}</p>
        </div>
      ))}
    </div>
  );
}

function SoloExhibition() {
  return (
    <div>
      <h2>Solo Exhibition</h2>
      {soloExhibition.map((ex, index) => (
        <div key={index}>
          <h3>{ex.year}</h3>
          <p>{ex.body}</p>
          <p>{ex.location}</p>
        </div>
      ))}
    </div>
  );
}

function GroupExhibition() {
  return (
    <div>
      <h2>Group Exhibition</h2>
      {groupExhibition.map((grEx, index) => (
        <div key={index}>
          <h3>{grEx.year}</h3>
          <p>{grEx.body}</p>
          <p>{grEx.location}</p>
        </div>
      ))}
    </div>
  );
}

export default function Exhibitions() {
  return (
    <>
      <Header title='Exhibitions' />
      <div className={styles.imageContainer}>
        <Image
          src='/images/sketch2.png'
          quality={100}
          width={668}
          height={1000}
          layout='responsive'
          priority={true}
          alt='A picture of Sketches'
        />
      </div>
      {Prizes()}
      {SoloExhibition()}
      {GroupExhibition()}
      <Footer />
    </>
  );
}
