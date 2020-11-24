import Header from '../../components/Header';
import WorksHeader from '../../components/WorksHeader';
import Work from './work';
import Footer from '../../components/Footer';

export default function graphicArt() {
  return (
    <>
      <Header title='Graphic Art' />
      <WorksHeader />
      <Work category='graphicArt' />
      <Footer />
    </>
  );
}
