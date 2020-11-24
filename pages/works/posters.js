import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';

export default function Posters() {
  return (
    <>
      <Header title='Posters' />
      <WorksHeader />
      <Work category='posters' />
      <Footer />
    </>
  );
}
