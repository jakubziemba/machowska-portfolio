import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeImage from '../components/HomeImage';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <Layout>
      <Header title='Contact' />
      <HomeImage />
      <div>
        <h3>Email:</h3> <h4>roksana1159@gmail.com</h4>
        <h3>Instagram: </h3> <h4>@roksana_machowska</h4>
      </div>
      <Footer />
    </Layout>
  );
}
