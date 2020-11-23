import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeImage from '../components/HomeImage';
import Footer from '../components/Footer';
import styles from './Text.module.scss';

export default function Contact() {
  return (
    <Layout>
      <Header title='Contact' />
      <HomeImage />
      <div className={styles.container}>
        <h3>Email:</h3> <h4>roksana1159@gmail.com</h4>
        <h3>Instagram: </h3> <h4>@roksana_machowska</h4>
      </div>
      <Footer />
    </Layout>
  );
}
