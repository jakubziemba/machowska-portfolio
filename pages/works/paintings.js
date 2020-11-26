import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';
import styles from './art.module.scss';

export default function Paintings() {
  return (
    <div>
      <div className={styles.header}>
        <Header title='Paintings' />
        <WorksHeader />
      </div>
      <div className={styles.main}>
        <Work category='paintings' />
      </div>
      <Footer />
    </div>
  );
}
