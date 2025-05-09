import Promo from '../Promo/Promo.js';
import FavoriteBrandsNew from '../FavoriteBrands/FavoriteBrands.jsx';
import UkrainianBrands from '../UkrainianBrands/UkrainianBrands.jsx';
import RecommendationsNew from '../RecommendationsNew/RecommendationsNew.jsx';
import './Catalogue.scss';

const Catalogue = () => {
  return (
    <div className='container'>
      <Promo />
      <FavoriteBrandsNew />
      <UkrainianBrands />
      <RecommendationsNew />
    </div>
  );
};

export default Catalogue;
