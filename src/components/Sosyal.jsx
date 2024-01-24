import React, {useState} from 'react';

const Button = ({ id }) => {
  const [count, setCount] = useState(0);
  const arrayins = [
    {url : 'https://www.instagram.com/aymhmt_/' , id : 0},
    {url : 'https://www.instagram.com/akyiit/', id : 1},
    {url : 'https://www.instagram.com/kadirgllmz/', id : 2},
    {url : 'https://www.instagram.com/alisyrrr/', id : 3},
  ];
  const [counts, setCounts] = useState(0);
  const arraywhtp = [
    {url : 'https://wa.me/905527172946' , id : 0},
    {url : 'https://wa.me/905010901103', id : 1},
    {url : 'https://wa.me/905411598826', id : 2},
    {url : 'https://wa.me/905365089184', id : 3},
  ];
  const handleButtonClick = () => {
    const selectedUrl = arrayins.find(item => item.id === id)?.url;
    if (selectedUrl) {
      window.open(selectedUrl, '_blank');
      setCount(id);
    }
  };

  const whtpButtonClick = () => {
    const selectedURL = arraywhtp.find(item => item.id === id)?.url;
    if(selectedURL){
      window.open(selectedURL, '_blank');
      setCounts(id);
    }
    
  };

  return (
    <>
    <button className='ins-button' onClick={handleButtonClick}>
      İnstgram
    </button>
    <br/>
    <button className='whtp-button' onClick={whtpButtonClick}>
      Whatsapp
    </button>
    </>
    
  );
};

export default Button;