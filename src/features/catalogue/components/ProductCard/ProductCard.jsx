import { useState } from 'react';
import FavoriteBtn from '../../../../components/favorite-btn/FavoriteBtn.jsx';
import './ProductCard.scss';
import StarRating from '../../../../components/star-rating/StarRating.jsx';
export default function ProductCard({ isOnSale, image, title, brand, price, oldPrice, colors }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(prev => !prev);

  return (
    <div className='product-card'>
      <div className='img-wrapper'>
        {isOnSale && <div className='badge'>On Sale</div>}
        <img src={image} alt={title} className='product-image' />
        <StarRating initialRating={3} />
      </div>
      <button className='favorite-btn' onClick={toggleFavorite}>
        <FavoriteBtn isFavorite={isFavorite} />
      </button>
      <div className='product-info'>
        <div className='price-section'>
          <span className='price'>${price.toFixed(2)}</span>
          {oldPrice && <span className='old-price'>${oldPrice.toFixed(2)}</span>}
        </div>
        <p className='product-title'>{title}</p>
        <p className='product-brand'>{brand}</p>

        <div className='colors'>
          {colors.map((color, idx) => (
            <span key={idx} className='color-dot' style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <div className='btn-cart-wrapper'>
          <button className='add-to-cart'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
