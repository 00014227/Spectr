import React, { useState, useEffect } from 'react';

const texts = ['Маркетинг', 'Веб разработки', 'Брендинг', 'СММ', 'Таргетинг', 'Креативный контент'];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleAnimation = () => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    if (typeof window !== 'undefined') {
      const interval = setInterval(handleAnimation, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  const isMediumScreen = typeof window !== 'undefined' && window.innerWidth <= 768 && window.innerWidth < 1224;

  return (
    <div>
    
        <div className="bg-blue-500 inline-block transition-width duration-1000 ease-in-out rounded-full py-4" style={{ width: `${texts[index].length * 55}px` }}>
          <h1 className="text-7xl font-bold pl-7 text-white transition-opacity duration-1000 ease-in-out" style={{ opacity: 0.5 }}>
            {texts[index]}
          </h1>
        </div>

    </div>
  );
};

export default AnimatedText;
