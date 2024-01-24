
import { useRef, useState } from 'react';
import Sosyal from './Sosyal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };


  return (
    <>
    <div className= 'Total-card' ref={carouselRef}>
        <div className='sag' onClick={handlePrev}>
          <FontAwesomeIcon className = 'icon' icon={faChevronRight} />
        </div>
      <div className='card'>
          
        <div className = 'mami' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/mami.JPG' alt='Mami' draggable = "false"></img>
          <h2 className='baslik-isim'> Mami </h2>
          <p className='yazi0'> Mami grubun en komiğidir.</p>
          <Sosyal id={0} />
        </div>

        <div className = 'musti' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/musti.JPG' alt='Musti' draggable = "false"></img>
          <h2 className='baslik-isim'> Musti </h2>
          <p className='yazi0'> Musti grubun en tatlısıdır.</p>
          <Sosyal id={1}/>
        </div>

        <div className = 'kado' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/kado.JPG' alt='Kado' draggable = "false"></img>
          <h2 className='baslik-isim'> Kado </h2>
          <p className='yazi0'> Kado grubun en yakışıklısıdır.</p>
          <Sosyal id={2}/>
        </div>

        <div className='ali' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/ali.JPG' alt='Ali' draggable = "false"></img>
          <h2 className='baslik-isim'> Aliş </h2>
          <p className='yazi0'> Aliş grubun en şanslıdır.</p>
          <Sosyal id={3}/>
        </div>

        <div className='ceyda' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/ceyda.png' alt='Ceyda' draggable = "false"></img>
          <h2 className='baslik-isim'> Ceydoş </h2>
          <p className='yazi0'> Ceyda grubun en küçüğüdür.</p>
          <Sosyal id={0} />
        </div>

        <div className='ilayda' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/ilos.jpeg' alt='Mami' draggable="false"></img>
          <h2 className='baslik-isim'> İloş </h2>
          <p className='yazi0'> İloş grubun en safıdır.</p>
          <Sosyal id={0} />
        </div>

        <div className='rümeysa' style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
          <img className='resim' src='./src/assets/rümeysa.jpeg' alt='Mami' draggable="false"></img>
          <h2 className='baslik-isim'> Rümm </h2>
          <p className='yazi0'> Rümm grubun en sinsisidir.</p>
          <Sosyal id={0} />
        </div>
        </div>
        <div className='sol' onClick={handleNext} >
          <FontAwesomeIcon className = 'icon' icon={faChevronLeft} />
        </div>
          
    </div>
        
    </>
  );
}

export default Card;


