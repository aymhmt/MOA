import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Lagabia = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    },[currentIndex]);


    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 7);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
      };

        return (
            <div className='Container'>
                <div className='Card-top'>
                    <div className='sag'  onClick={handlePrev}>
                        <FontAwesomeIcon className = 'icon' icon={faChevronRight} />
                     </div>
                    <ul className='Card-extra'>
                        <li className='ma' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='ma-top' ref={carouselRef}> 
                                <img className='resim' src='./src/assets/mami.JPG' alt='Mami' draggable = "false"></img>
                                <h2 className='p'> Mami </h2>
                                <p className='y'> Mami grubun en komiğidir.</p>
                            </div>
                        </li>
                        <li className='mu' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='mu-top'> 
                                <img className='resim' src='./src/assets/musti.JPG' alt='Musti' draggable = "false"></img>
                                <h2 className='p'> Musti </h2>
                                <p className='y'> Musti grubun en tatlısıdır.</p>
                            </div>
                        </li>

                        <li className='ka' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}> 
                            <div className='ka-top'>
                                <img className='resim' src='./src/assets/kado.JPG' alt='Kado' draggable = "false"></img>
                                <h2 className='p'> Kado </h2>
                                <p className='y'> Kado grubun en yakışıklısıdır.</p>                    
                            </div>
                        </li>

                        <li className='al' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='al-top'> 
                                <img className='resim' src='./src/assets/ali.JPG' alt='Ali' draggable = "false"></img>
                                <h2 className='p'> Aliş </h2>
                                <p className='y'> Aliş grubun en şanslıdır.</p>
                            </div>
                        </li>

                        <li className='ıl' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='ıl-top'>
                                <img className='resim' src='./src/assets/ilos.jpeg' alt='Mami' draggable="false"></img>
                                <h2 className='p'> İloş </h2>
                                <p className='y'> İloş grubun en safıdır.</p>
                            </div>
                        </li>

                        <li className='ce' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='ce-top'>
                                <img className='resim' src='./src/assets/ceyda.png' alt='Ceyda' draggable = "false"></img>
                                <h2 className='p'> Ceydoş </h2>
                                <p className='y'> Ceyda grubun en küçüğüdür.</p>
                            </div>
                        </li>

                        <li className='ru' draggable = "false" style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            <div className='ru-top'>
                                <img className='resim' src='./src/assets/rümeysa.jpeg' alt='Mami' draggable="false"></img>
                                <h2 className='p'> Rümm </h2>
                                <p className='y'> Rümm grubun en sinsisidir.</p>
                            </div>
                        </li>

                    </ul>

                    <div className='sol' onClick={handleNext} >
                        <FontAwesomeIcon className = 'icon' icon={faChevronLeft} />
                    </div>

                </div>
                
            </div>
        );
    
}

export default Lagabia;
