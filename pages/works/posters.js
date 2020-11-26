import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';
import styles from './art.module.scss';

export default function Posters() {
  return (
    <div>
      <div className={styles.header}>
        <Header title='Posters' />
        <WorksHeader />
      </div>
      <div className={styles.main}>
        <Work category='posters' />
      </div>
      <Footer />
    </div>
  );
}
