import Header from '../components/Header';
import Image from 'next/image';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './about.module.scss';

export default function About() {
  return (
    <div>
      <Header title='About' />
      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src='/images/me2.png'
            quality={100}
            width={668}
            height={1000}
            layout='responsive'
            priority={true}
            alt='Photo of Roksana Machowska'
          />
        </div>
        <div className={styles.content}>
          <div className={styles.menu}>
            <Menu />
          </div>
          <div className={styles.container}>
            <p>
              <span>Roksana Machowska</span>, was born in 1996 in
              Warsaw. She holds a Master of Fine Arts. She obtained
              eight scholarships for the best students for the
              artistic achievements: including from the Capital City
              of Warsaw (2016–2019), or the Minister of Science and
              Higher Education (2020). She works in a variety of
              mediums: printmaking, digital graphics, painting,
              artistic fabric, design and installation. She took part
              in some group shows and held her solo exhibitions as
              well; including one at the Władysław Hasior Gallery in
              Zakopane (branch of the Tatra Museum), or at the Capital
              Centre for Cultural Education in Warsaw. In her works
              she is inspired by nature and abstraction forms.
            </p>
            <p className={styles.statement}>
              <span>Artist Statement</span>
              <br />
              Nature is a very important topic of my work. I think
              nature is a fascinating element that we are unable to
              fully understand. As the primary state of the
              environment, it is unlimited and can increase a feeling
              of peace as well as the opposite state of anxiety.
              Nature, along with the phenomena and processes occurring
              in it, has been a frequent motive in the works of
              artists over the centuries. I often devide the landscape
              that I see into modules, which I arrange in various
              parts of my composition. I create abstract works in
              which I want to express the powerful element of nature.
              I leave the mimetic representation of reality and
              focused on showing the changing elements. Currently, I
              continue to develop the subject of the nature using
              abstract forms. I focus on shapes and synthesis of
              surrounding reality. Many of my works until now were
              made in black and white. Recently I have started to
              introduce a lot of colors into my compositions. I also
              try to look for them in nature.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
