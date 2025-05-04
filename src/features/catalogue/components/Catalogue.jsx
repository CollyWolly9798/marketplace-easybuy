import Recommendations from '../components/Recommendations';
import UaBrands from '../components/UkrainianBrands';
// import CarouselSection from './FavoriteBrandsBAD';
import '../styles/Catalogue.scss';
import Promo from '../components/Promo.jsx';
import FavoriteBrands from './FavoriteBrands.jsx';

const Catalogue = () => {
  return (
    <div className='container'>
      <Promo />
      <FavoriteBrands />
      {/* <CarouselSection /> */}
      <UaBrands />
      <Recommendations />
    </div>
  );
};

export default Catalogue;
