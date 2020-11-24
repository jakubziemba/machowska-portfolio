import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import styles from './image.module.scss';

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
      <div>
        <h2>Prizes</h2>
        <p>
          2020
          <br />
          Scholarships for the artistic achievements, from the
          Minister of Science and Higher Education,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2020
          <br />
          Scholarships for the artistic achievements, from the Rector
          of the Maria Grzegorzewska University in Warsaw,
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
          Scholarships for the artistic achievements, from the Capital
          City of Warsaw,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2018
          <br />
          Scholarships for the artistic achievements, from the Rector
          of the Maria Grzegorzewska University in Warsaw,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2018
          <br />
          Scholarships for the artistic achievements, from the Capital
          City of Warsaw,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2017
          <br />
          Scholarships for the artistic achievements, from the Rector
          of the Maria Grzegorzewska University in Warsaw,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2017
          <br />
          Scholarships for the artistic achievements, from the Capital
          City of Warsaw,
          <br />
          Warsaw, Poland
          <br />
          <br />
          2016
          <br />
          Art competition, Prize- first prize, the Maria Grzegorzewska
          University in Warsaw,
          <br />
          Warsaw, Poland
        </p>
      </div>
      <Footer />
    </>
  );
}
