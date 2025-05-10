import Promo from '../Promo/Promo.js';
import FavoriteBrands from '../FavoriteBrands/FavoriteBrands.jsx';
import UkrainianBrands from '../UkrainianBrands/UkrainianBrands.jsx';
import RecommendationsNew from '../Recommendations/Recommendations.jsx';

const Catalogue = () => {
  return (
    <div className='container'>
      <Promo />
      <FavoriteBrands />
      <UkrainianBrands />
      <RecommendationsNew />
    </div>
  );
};

export default Catalogue;
