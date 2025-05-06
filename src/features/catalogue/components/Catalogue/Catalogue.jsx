import Recommendations from '../Recommendations';
import UaBrands from '../UkrainianBrands';
import './Catalogue.scss';
import Promo from '../Promo.js';
import FavoriteBrands from '../FavoriteBrands.jsx';
import FavoriteBrandsNew from '../FavoriteBrandsNew/FavoriteBrandsNew.jsx';

const Catalogue = () => {
  return (
    <div className='container'>
      <Promo />
      <FavoriteBrandsNew />
      {/* <FavoriteBrands /> */}
      {/* <CarouselSection /> */}
      <UaBrands />
      <Recommendations />
    </div>
  );
};

export default Catalogue;
