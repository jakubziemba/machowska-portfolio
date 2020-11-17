import Header from '../../components/Header';
import styles from './Paintings.module.scss';

export default function Paintings() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Paintings</h1>
      </div>
    </>
  );
}
