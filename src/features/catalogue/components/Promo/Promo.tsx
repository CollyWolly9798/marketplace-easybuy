import LargeCarousel from '../../../../components/large-carousel/LargeCarousel';
import { Slide } from '../../../../types/Slider';
import './Promo.scss';
import banner from '../../../../assets/img/banner.jpg';

const slides: Slide[] = [
  {
    id: 1,
    image: banner,
    title: 'Big Holiday Sale',
    description: 'Up to -50%',
  },
  {
    id: 2,
    image: banner,
    title: 'New Arrivals',
    description: 'Check out our new collection',
  },
  {
    id: 3,
    image: banner,
    title: 'Clearance',
    description: 'Last chance items',
  },
];
export default function Promo() {
  return (
    <section className='section-promo'>
      <LargeCarousel slides={slides} />
    </section>
  );
}
