import ProductCard from '../ProductCard/ProductCard.jsx';
import './RecommendationsNew.scss';
import cardImg from '../../../../assets/img/woman-rec.png';
export default function RecommendationsNew() {
  const products = [
    {
      image: cardImg,
      title: "Women's Midi Slip Dress",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'A New Day',
      colors: ['#252527', '#757c6a', '#62232c'],
    },
    {
      image: cardImg,
      title: "Women's Midi Slip Dress",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'A New Day',
      colors: ['#535049', '#494e62'],
    },
    {
      image: cardImg,
      title: "Women's Midi Slip Dress",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'A New Day',
      colors: ['#252527', '#066277', '#8c1d37'],
    },
    {
      image: cardImg,
      title: "Women's Midi Slip Dress",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'A New Day',
      colors: ['#000000'],
    },
  ];
  return (
    <section className='container'>
      <div className='section-wrapper'>
        <h2 className='section-logo'>Recommendations</h2>
        <a className='section-link' href='#'>
          Shop now
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.6683 7.66217L10 7.66216C8.34315 7.66215 7 9.0053 7 10.6622L7 21.9997C7 23.6566 8.34315 24.9997 10 24.9997L21.3376 24.9997C22.9944 24.9997 24.3376 23.6566 24.3376 21.9997V18.3314M14.3351 17.6646L24.3376 7.66215M19.0029 7.66211L24.3375 7.67188L24.3375 12.9967'
              stroke='#104C9A'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
      <div className='product-wrapper'>
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
