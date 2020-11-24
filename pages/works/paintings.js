import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';

export default function Paintings() {
  return (
    <>
      <Header title='Paintings' />
      <WorksHeader />
      <Work category='paintings' />
      <Footer />
    </>
  );
}
