import React, { useState, useEffect } from 'react';

const texts = ['Маркетинг', 'Веб разработки', 'Брендинг', 'СММ', 'Таргетинг', 'Креативный контент'];

const AnimatedText = ({ serverIndex }) => {
  const [index, setIndex] = useState(serverIndex || 0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      setIndex((prevIndex) => (prevIndex + 1) % (texts.length * 2));
    };

    const interval = setInterval(handleAnimation, 2000);

    setIsHydrated(true);

    return () => clearInterval(interval);
  }, []);

  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1224;

  const displayIndex = index % texts.length;
  const widthMultiplier = texts[displayIndex].length === 18 ? 55 : 80;

  return (
    <div>
      {isHydrated && ( // Render content only after hydration
        isLargeScreen ? (
          <div className="bg-blue-500 inline-block transition-width duration-1000 ease-in-out rounded-full py-4" style={{ width: `${texts[displayIndex].length * widthMultiplier}px` }}>
            <h1 className="lg:text-7xl text-lg font-bold pl-7 text-white transition-opacity duration-1000 ease-in-out" style={{ opacity: 0.5 }}>
              {texts[displayIndex]}
            </h1>
          </div>
        ) : (
          <h1 className=' text-white text-[23px] font-bold'>уникальные маркетинговые стратегии</h1>
        )
      )}
    </div>
  );
};

export default AnimatedText;
