import './FavouritesButton.scss';
import iconLike from '../../../assets/img/icons/favorite.svg';

const FavouritesButton = () => {
  return (
    <li>
      <a href='!#'>
        <img src={iconLike} alt='Favourites' title='Favourites' />
      </a>
    </li>
  );
};

export default FavouritesButton;
