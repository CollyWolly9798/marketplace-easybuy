import bobo from '../../../../assets/img/ua-bobo.png';
import './UaPromo.scss';
export default function UaPromo() {
  return (
    <div className='ua-promo'>
      <div className='ua-overlay' />
      <div className='ua-content'>
        <h2 className='ua-title'>Christmas Sale</h2>
        <p className='ua-subtitle'>Up to -33%</p>
        <img className='ua-img' src={bobo} alt='Bobo' />
      </div>
    </div>
  );
}
