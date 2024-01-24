import React, { useState } from "react";

const Form = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [isGonderildi, setIsGonderildi] = useState(false);

  const gonderClick = () => {
    console.log("Gönder'e tıklandı, input değeri:", inputValue);
    setIsGonderildi(true);
    setInputValue("");
    setIsGonderildi(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
    
  return (
    <>
      <div className="form">
        <label>
          <p>Görüşlerinizi bizimle paylaşın!</p>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            disabled={isGonderildi}
            placeholder="Düşüncelerini bizimle paylaş!"
             
          />
          <br/>
          <br/>
          <button type="button" onClick={gonderClick} disabled={isGonderildi} >
            Gönder
          </button>
        </label>
      </div>
    </>
  );
};

export default Form;
