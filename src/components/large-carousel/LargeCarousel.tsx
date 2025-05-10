import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide } from '../../types/Slider';
import './LargeCarousel.scss';

interface LargeCarouselProps {
  slides: Slide[];
}

const LargeCarousel: React.FC<LargeCarouselProps> = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map(slide => (
          <Carousel.Item key={slide.id}>
            <img className='d-block w-100' src={slide.image} alt={slide.title} />
            <Carousel.Caption>
              <div className='text-up'>
                <div className='text-up tittle'>
                  <h3>{slide.title}</h3>
                </div>
                <div className='text-up sale'>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LargeCarousel;
