import Recommendations from '../components/Recommendations';
import UaBrands from '../components/UkrainianBrands';
import CarouselSection from './FavoriteBrands';
import '../styles/Catalogue.scss';
import Banner from './ControlledCarousel';

const Catalogue = () => {
  return (
    <div className='catalogue-container'>
      <Banner />
      <CarouselSection />
      <UaBrands />
      <Recommendations />
    </div>
  );
};

export default Catalogue;
