import ShoeImage from '../../../../assets/img/cross puma.png';
import PumaLogo from '../../../../assets/img/icons/puma-logo 1.svg';
import './FavoritePromo.scss';

export default function FavoritePromo() {
  return (
    <section className='promo-banner'>
      <div className='promo-content'>
        <div className='promo-text'>
          <p className='promo-discount'>-30%</p>
          <img src={PumaLogo} alt='Puma Logo' className='brand-logo' />
        </div>
        <div className='promo-image'>
          <img src={ShoeImage} alt='Puma Shoe' />
        </div>
      </div>
    </section>
  );
}
