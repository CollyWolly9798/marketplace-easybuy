import iconCard from '../../../assets/img/icons/shopping.svg';

const CartButton = () => {
  return (
    <li>
      <a href='!#'>
        <img src={iconCard} alt='Cart' title='Cart' />
      </a>
    </li>
  );
};

export default CartButton;
