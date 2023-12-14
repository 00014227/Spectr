import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AnimatedDivs = () => {
  const [isVisible, setIsVisible] = useState({
    animatedElement1: false,
    animatedElement2: false,
    animatedElement3: false,
    animatedElement4: false,
    animatedElement5: false,
    otherElement2: false,
    // Add more elements as needed
  });

  useEffect(() => {
    const handleScroll = () => {
      const elementIds = [
        'animatedElement1',
        'animatedElement2',
        'animatedElement3',
        'animatedElement4',
        'animatedElement5'

        // Add more elements as needed
      ];

      const newVisibilityState = {};
      elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        const rect = element.getBoundingClientRect();
        // Adjust the threshold as needed
        newVisibilityState[elementId] = rect.top <= window.innerHeight * 0.75;
      });

      setIsVisible(newVisibilityState);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Array of SVG components
  const svgComponents = [

    <div key={1} className="ml-auto  bg-black max-w-[1500px] w-[75%] " >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1518 968" fill="none" className='w-full h-auto'>
        <mask id="path-1-inside-1_187_152" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M1811.11 968H1293.94C1176.23 968 1134.28 872.355 1134.28 801.85V669.928C1134.28 669.928 1103.89 488.899 906.279 488H897.973H237C106.109 488 0 381.891 0 251V233C0 104.318 104.318 0 233 0H893.973H1380.5H1391.97H1392C1474.29 0 1541 66.7096 1541 149V166.121C1560.18 334.559 1610.39 454.642 1791.09 469.824C1902.72 476.383 1961 541.763 1961 663.848V772.747C1961 909.315 1897.19 954.473 1811.11 967.864V968Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M1811.11 968H1293.94C1176.23 968 1134.28 872.355 1134.28 801.85V669.928C1134.28 669.928 1103.89 488.899 906.279 488H897.973H237C106.109 488 0 381.891 0 251V233C0 104.318 104.318 0 233 0H893.973H1380.5H1391.97H1392C1474.29 0 1541 66.7096 1541 149V166.121C1560.18 334.559 1610.39 454.642 1791.09 469.824C1902.72 476.383 1961 541.763 1961 663.848V772.747C1961 909.315 1897.19 954.473 1811.11 967.864V968Z" fill="#fcfafa" />
        <path d="M1811.11 968H1812.11V969H1811.11V968ZM1134.28 669.928L1135.27 669.762L1135.28 669.845V669.928H1134.28ZM906.279 488V487H906.284L906.279 488ZM1541 166.121L1540.01 166.234L1540 166.177V166.121H1541ZM1791.09 469.824L1791.03 470.822L1791.02 470.822L1791.01 470.82L1791.09 469.824ZM1811.11 967.864H1810.11V967.007L1810.96 966.876L1811.11 967.864ZM1293.94 967H1811.11V969H1293.94V967ZM1135.28 801.85C1135.28 836.928 1145.72 878.238 1170.76 910.754C1195.77 943.232 1235.39 967 1293.94 967V969C1234.78 969 1194.57 944.945 1169.18 911.974C1143.82 879.042 1133.28 837.277 1133.28 801.85H1135.28ZM1135.28 669.928V801.85H1133.28V669.928H1135.28ZM906.284 487C1005.46 487.451 1062.74 533.128 1095.2 578.721C1111.42 601.501 1121.43 624.248 1127.39 641.298C1130.37 649.825 1132.34 656.93 1133.56 661.909C1134.17 664.398 1134.6 666.356 1134.87 667.695C1135.01 668.364 1135.11 668.878 1135.17 669.226C1135.2 669.4 1135.23 669.533 1135.24 669.623C1135.25 669.668 1135.26 669.702 1135.26 669.725C1135.26 669.737 1135.27 669.746 1135.27 669.752C1135.27 669.755 1135.27 669.758 1135.27 669.759C1135.27 669.761 1135.27 669.762 1134.28 669.928C1133.3 670.094 1133.3 670.093 1133.3 670.092C1133.3 670.091 1133.29 670.09 1133.29 670.087C1133.29 670.082 1133.29 670.075 1133.29 670.065C1133.29 670.044 1133.28 670.013 1133.27 669.971C1133.26 669.886 1133.24 669.759 1133.21 669.591C1133.14 669.254 1133.05 668.752 1132.91 668.095C1132.64 666.781 1132.22 664.849 1131.62 662.386C1130.41 657.461 1128.46 650.417 1125.5 641.958C1119.59 625.037 1109.65 602.47 1093.57 579.881C1061.43 534.735 1004.72 489.448 906.275 489L906.284 487ZM906.279 489H897.973V487H906.279V489ZM237 487H897.973V489H237V487ZM1 251C1 381.339 106.661 487 237 487V489C105.556 489 -1 382.444 -1 251H1ZM1 233V251H-1V233H1ZM233 1C104.87 1 1 104.87 1 233H-1C-1 103.765 103.765 -1 233 -1V1ZM893.973 1H233V-1H893.973V1ZM893.973 -1H1380.5V1H893.973V-1ZM1380.5 -1H1391.97V1H1380.5V-1ZM1392 1H1391.97V-1H1392V1ZM1540 149C1540 67.2619 1473.74 1 1392 1V-1C1474.84 -1 1542 66.1573 1542 149H1540ZM1540 166.121V149H1542V166.121H1540ZM1791.01 470.82C1700.42 463.209 1642.4 429.275 1604.66 376.022C1566.97 322.834 1549.6 250.491 1540.01 166.234L1541.99 166.007C1551.58 250.189 1568.91 322.107 1606.29 374.865C1643.63 427.559 1701.07 461.257 1791.18 468.828L1791.01 470.82ZM1960 663.848C1960 602.953 1945.47 556.356 1917.16 524.174C1888.86 492.003 1846.67 474.091 1791.03 470.822L1791.15 468.826C1847.15 472.116 1889.91 490.173 1918.66 522.853C1947.4 555.522 1962 602.658 1962 663.848H1960ZM1960 772.747V663.848H1962V772.747H1960ZM1810.96 966.876C1853.88 960.199 1891.09 945.625 1917.59 915.832C1944.08 886.042 1960 840.883 1960 772.747H1962C1962 841.179 1946.01 886.882 1919.08 917.161C1892.16 947.437 1854.42 962.138 1811.26 968.852L1810.96 966.876ZM1810.11 968V967.864H1812.11V968H1810.11Z" fill="white" mask="url(#path-1-inside-1_187_152)" />
        <foreignObject className='w-full h-full'>
          <div xmlns="http://www.w3.org/1999/xhtml" className=' ml-8 mt-40 flex space-x-64'>
            <div className='flex gap-12 my-auto'>
              <h1 className='text-black text-9xl font-bold'>1</h1>
              <h3 className='text-black text-[64px] mt-4 font-medium'>Брендинг.</h3>
            </div>
            <p className='text-black w-[40%] text-2xl  font-normal'>Создание бренда компании ( нейминг, логотип, цветовая палитра, типография, графические элементы, стиль фотографий и изображений, звуковая айдентика, текстовый стиль, инфографика и иллюстрации ).
</p>
          </div>
        </foreignObject>
      </svg>
    </div>,
    <div  key={2} className=' xl:mt-96 lg:mt-48 mt-20 max-w-[1500px] w-[75%] '>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-auto' viewBox="0 0 1505 968" fill="none">
        <mask id="path-1-inside-1_187_170" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M-306.11 968H211.059C328.771 968 370.718 872.355 370.718 801.85V669.928C370.718 669.928 401.105 488.899 598.721 488H607.027H1268C1398.89 488 1505 381.891 1505 251V233C1505 104.318 1400.68 0 1272 0H611.027H124.5H113.027H113C30.7096 0 -36 66.7096 -36 149V166.121C-55.1797 334.559 -105.39 454.642 -286.093 469.824C-397.725 476.383 -456 541.763 -456 663.848V772.747C-456 909.315 -392.191 954.473 -306.11 967.864V968Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M-306.11 968H211.059C328.771 968 370.718 872.355 370.718 801.85V669.928C370.718 669.928 401.105 488.899 598.721 488H607.027H1268C1398.89 488 1505 381.891 1505 251V233C1505 104.318 1400.68 0 1272 0H611.027H124.5H113.027H113C30.7096 0 -36 66.7096 -36 149V166.121C-55.1797 334.559 -105.39 454.642 -286.093 469.824C-397.725 476.383 -456 541.763 -456 663.848V772.747C-456 909.315 -392.191 954.473 -306.11 967.864V968Z" fill="#fcfafa" />
        <path d="M-306.11 968H-307.11V969H-306.11V968ZM370.718 669.928L369.732 669.762L369.718 669.845V669.928H370.718ZM598.721 488V487H598.716L598.721 488ZM-36 166.121L-35.0064 166.234L-35 166.177V166.121H-36ZM-286.093 469.824L-286.034 470.822L-286.022 470.822L-286.009 470.82L-286.093 469.824ZM-306.11 967.864H-305.11V967.007L-305.956 966.876L-306.11 967.864ZM211.059 967H-306.11V969H211.059V967ZM369.718 801.85C369.718 836.928 359.279 878.238 334.238 910.754C309.227 943.232 269.605 967 211.059 967V969C270.224 969 310.432 944.945 335.823 911.974C361.184 879.042 371.718 837.277 371.718 801.85H369.718ZM369.718 669.928V801.85H371.718V669.928H369.718ZM598.716 487C499.542 487.451 442.257 533.128 409.799 578.721C393.582 601.501 383.569 624.248 377.61 641.298C374.63 649.825 372.662 656.93 371.439 661.909C370.827 664.398 370.401 666.356 370.128 667.695C369.991 668.364 369.893 668.878 369.828 669.226C369.796 669.4 369.772 669.533 369.756 669.623C369.748 669.668 369.742 669.702 369.738 669.725C369.736 669.737 369.735 669.746 369.734 669.752C369.733 669.755 369.733 669.758 369.733 669.759C369.732 669.761 369.732 669.762 370.718 669.928C371.704 670.094 371.704 670.093 371.705 670.092C371.705 670.091 371.705 670.09 371.705 670.087C371.706 670.082 371.708 670.075 371.709 670.065C371.713 670.044 371.718 670.013 371.726 669.971C371.741 669.886 371.763 669.759 371.795 669.591C371.857 669.254 371.953 668.752 372.087 668.095C372.356 666.781 372.776 664.849 373.381 662.386C374.591 657.461 376.541 650.417 379.498 641.958C385.412 625.037 395.347 602.47 411.428 579.881C443.568 534.735 500.284 489.448 598.725 489L598.716 487ZM598.721 489H607.027V487H598.721V489ZM1268 487H607.027V489H1268V487ZM1504 251C1504 381.339 1398.34 487 1268 487V489C1399.44 489 1506 382.444 1506 251H1504ZM1504 233V251H1506V233H1504ZM1272 1C1400.13 1 1504 104.87 1504 233H1506C1506 103.765 1401.23 -1 1272 -1V1ZM611.027 1H1272V-1H611.027V1ZM611.027 -1H124.5V1H611.027V-1ZM124.5 -1H113.027V1H124.5V-1ZM113 1H113.027V-1H113V1ZM-35 149C-35 67.2619 31.2619 1 113 1V-1C30.1573 -1 -37 66.1573 -37 149H-35ZM-35 166.121V149H-37V166.121H-35ZM-286.009 470.82C-195.416 463.209 -137.396 429.275 -99.6594 376.022C-61.9692 322.834 -44.6005 250.491 -35.0064 166.234L-36.9936 166.007C-46.5791 250.189 -63.9056 322.107 -101.291 374.865C-138.631 427.559 -196.067 461.257 -286.176 468.828L-286.009 470.82ZM-455 663.848C-455 602.953 -440.466 556.356 -412.157 524.174C-383.859 492.003 -341.666 474.091 -286.034 470.822L-286.151 468.826C-342.152 472.116 -384.912 490.173 -413.659 522.853C-442.396 555.522 -457 602.658 -457 663.848H-455ZM-455 772.747V663.848H-457V772.747H-455ZM-305.956 966.876C-348.877 960.199 -386.09 945.625 -412.588 915.832C-439.083 886.042 -455 840.883 -455 772.747H-457C-457 841.179 -441.013 886.882 -414.083 917.161C-387.156 947.437 -349.424 962.138 -306.264 968.852L-305.956 966.876ZM-305.11 968V967.864H-307.11V968H-305.11Z" fill="white" mask="url(#path-1-inside-1_187_170)" />
        <foreignObject className='w-full h-full'>
          <div xmlns="http://www.w3.org/1999/xhtml" className=' ml-56 mt-40 flex space-x-64'>
            <div className='flex gap-12'>
              <h1 className='text-black text-9xl font-bold '>2</h1>
              <h3 className='text-black mt-4 text-[64px] font-medium'>
              Production.
              </h3>
            </div>
            <p className='text-black w-[40%] text-2xl font-normal'>Фото и видео продакшн для создания качественного контента компании ( профессиональные фотосессии и видео ролики для компаний ).

</p>
          </div>
        </foreignObject>
      </svg>
    </div>,

    <div  key={3} className="ml-auto xl:mt-96 lg:mt-48 mt-20 max-w-[1500px] w-[75%] " >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1518 968" fill="none" className='w-full h-auto'>
        <mask id="path-1-inside-1_187_152" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M1811.11 968H1293.94C1176.23 968 1134.28 872.355 1134.28 801.85V669.928C1134.28 669.928 1103.89 488.899 906.279 488H897.973H237C106.109 488 0 381.891 0 251V233C0 104.318 104.318 0 233 0H893.973H1380.5H1391.97H1392C1474.29 0 1541 66.7096 1541 149V166.121C1560.18 334.559 1610.39 454.642 1791.09 469.824C1902.72 476.383 1961 541.763 1961 663.848V772.747C1961 909.315 1897.19 954.473 1811.11 967.864V968Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M1811.11 968H1293.94C1176.23 968 1134.28 872.355 1134.28 801.85V669.928C1134.28 669.928 1103.89 488.899 906.279 488H897.973H237C106.109 488 0 381.891 0 251V233C0 104.318 104.318 0 233 0H893.973H1380.5H1391.97H1392C1474.29 0 1541 66.7096 1541 149V166.121C1560.18 334.559 1610.39 454.642 1791.09 469.824C1902.72 476.383 1961 541.763 1961 663.848V772.747C1961 909.315 1897.19 954.473 1811.11 967.864V968Z" fill="#fcfafa" />
        <path d="M1811.11 968H1812.11V969H1811.11V968ZM1134.28 669.928L1135.27 669.762L1135.28 669.845V669.928H1134.28ZM906.279 488V487H906.284L906.279 488ZM1541 166.121L1540.01 166.234L1540 166.177V166.121H1541ZM1791.09 469.824L1791.03 470.822L1791.02 470.822L1791.01 470.82L1791.09 469.824ZM1811.11 967.864H1810.11V967.007L1810.96 966.876L1811.11 967.864ZM1293.94 967H1811.11V969H1293.94V967ZM1135.28 801.85C1135.28 836.928 1145.72 878.238 1170.76 910.754C1195.77 943.232 1235.39 967 1293.94 967V969C1234.78 969 1194.57 944.945 1169.18 911.974C1143.82 879.042 1133.28 837.277 1133.28 801.85H1135.28ZM1135.28 669.928V801.85H1133.28V669.928H1135.28ZM906.284 487C1005.46 487.451 1062.74 533.128 1095.2 578.721C1111.42 601.501 1121.43 624.248 1127.39 641.298C1130.37 649.825 1132.34 656.93 1133.56 661.909C1134.17 664.398 1134.6 666.356 1134.87 667.695C1135.01 668.364 1135.11 668.878 1135.17 669.226C1135.2 669.4 1135.23 669.533 1135.24 669.623C1135.25 669.668 1135.26 669.702 1135.26 669.725C1135.26 669.737 1135.27 669.746 1135.27 669.752C1135.27 669.755 1135.27 669.758 1135.27 669.759C1135.27 669.761 1135.27 669.762 1134.28 669.928C1133.3 670.094 1133.3 670.093 1133.3 670.092C1133.3 670.091 1133.29 670.09 1133.29 670.087C1133.29 670.082 1133.29 670.075 1133.29 670.065C1133.29 670.044 1133.28 670.013 1133.27 669.971C1133.26 669.886 1133.24 669.759 1133.21 669.591C1133.14 669.254 1133.05 668.752 1132.91 668.095C1132.64 666.781 1132.22 664.849 1131.62 662.386C1130.41 657.461 1128.46 650.417 1125.5 641.958C1119.59 625.037 1109.65 602.47 1093.57 579.881C1061.43 534.735 1004.72 489.448 906.275 489L906.284 487ZM906.279 489H897.973V487H906.279V489ZM237 487H897.973V489H237V487ZM1 251C1 381.339 106.661 487 237 487V489C105.556 489 -1 382.444 -1 251H1ZM1 233V251H-1V233H1ZM233 1C104.87 1 1 104.87 1 233H-1C-1 103.765 103.765 -1 233 -1V1ZM893.973 1H233V-1H893.973V1ZM893.973 -1H1380.5V1H893.973V-1ZM1380.5 -1H1391.97V1H1380.5V-1ZM1392 1H1391.97V-1H1392V1ZM1540 149C1540 67.2619 1473.74 1 1392 1V-1C1474.84 -1 1542 66.1573 1542 149H1540ZM1540 166.121V149H1542V166.121H1540ZM1791.01 470.82C1700.42 463.209 1642.4 429.275 1604.66 376.022C1566.97 322.834 1549.6 250.491 1540.01 166.234L1541.99 166.007C1551.58 250.189 1568.91 322.107 1606.29 374.865C1643.63 427.559 1701.07 461.257 1791.18 468.828L1791.01 470.82ZM1960 663.848C1960 602.953 1945.47 556.356 1917.16 524.174C1888.86 492.003 1846.67 474.091 1791.03 470.822L1791.15 468.826C1847.15 472.116 1889.91 490.173 1918.66 522.853C1947.4 555.522 1962 602.658 1962 663.848H1960ZM1960 772.747V663.848H1962V772.747H1960ZM1810.96 966.876C1853.88 960.199 1891.09 945.625 1917.59 915.832C1944.08 886.042 1960 840.883 1960 772.747H1962C1962 841.179 1946.01 886.882 1919.08 917.161C1892.16 947.437 1854.42 962.138 1811.26 968.852L1810.96 966.876ZM1810.11 968V967.864H1812.11V968H1810.11Z" fill="white" mask="url(#path-1-inside-1_187_152)" />
        <foreignObject className='w-full h-full'>
          <div xmlns="http://www.w3.org/1999/xhtml" className=' ml-8 mt-40 flex space-x-64'>
            <div className='flex gap-12'>
              <h1 className='text-black text-9xl font-bold '>3</h1>
              <h3 className='text-black text-[64px] mt-4 font-medium'>Web.</h3>
            </div>
            <p className='text-black w-[40%] text-2xl font-normal'>Создание и обновление веб-сайтов, лендингов, баннеров и других графических материалов.
 </p>
          </div>
        </foreignObject>
      </svg>
    </div>,
    <div  key={4} className='xl:mt-96  lg:mt-48 mt-20 max-w-[1500px] w-[75%] '>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-auto' viewBox="0 0 1505 968" fill="none">
        <mask id="path-1-inside-1_187_170" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M-306.11 968H211.059C328.771 968 370.718 872.355 370.718 801.85V669.928C370.718 669.928 401.105 488.899 598.721 488H607.027H1268C1398.89 488 1505 381.891 1505 251V233C1505 104.318 1400.68 0 1272 0H611.027H124.5H113.027H113C30.7096 0 -36 66.7096 -36 149V166.121C-55.1797 334.559 -105.39 454.642 -286.093 469.824C-397.725 476.383 -456 541.763 -456 663.848V772.747C-456 909.315 -392.191 954.473 -306.11 967.864V968Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M-306.11 968H211.059C328.771 968 370.718 872.355 370.718 801.85V669.928C370.718 669.928 401.105 488.899 598.721 488H607.027H1268C1398.89 488 1505 381.891 1505 251V233C1505 104.318 1400.68 0 1272 0H611.027H124.5H113.027H113C30.7096 0 -36 66.7096 -36 149V166.121C-55.1797 334.559 -105.39 454.642 -286.093 469.824C-397.725 476.383 -456 541.763 -456 663.848V772.747C-456 909.315 -392.191 954.473 -306.11 967.864V968Z" fill="#fcfafa" />
        <path d="M-306.11 968H-307.11V969H-306.11V968ZM370.718 669.928L369.732 669.762L369.718 669.845V669.928H370.718ZM598.721 488V487H598.716L598.721 488ZM-36 166.121L-35.0064 166.234L-35 166.177V166.121H-36ZM-286.093 469.824L-286.034 470.822L-286.022 470.822L-286.009 470.82L-286.093 469.824ZM-306.11 967.864H-305.11V967.007L-305.956 966.876L-306.11 967.864ZM211.059 967H-306.11V969H211.059V967ZM369.718 801.85C369.718 836.928 359.279 878.238 334.238 910.754C309.227 943.232 269.605 967 211.059 967V969C270.224 969 310.432 944.945 335.823 911.974C361.184 879.042 371.718 837.277 371.718 801.85H369.718ZM369.718 669.928V801.85H371.718V669.928H369.718ZM598.716 487C499.542 487.451 442.257 533.128 409.799 578.721C393.582 601.501 383.569 624.248 377.61 641.298C374.63 649.825 372.662 656.93 371.439 661.909C370.827 664.398 370.401 666.356 370.128 667.695C369.991 668.364 369.893 668.878 369.828 669.226C369.796 669.4 369.772 669.533 369.756 669.623C369.748 669.668 369.742 669.702 369.738 669.725C369.736 669.737 369.735 669.746 369.734 669.752C369.733 669.755 369.733 669.758 369.733 669.759C369.732 669.761 369.732 669.762 370.718 669.928C371.704 670.094 371.704 670.093 371.705 670.092C371.705 670.091 371.705 670.09 371.705 670.087C371.706 670.082 371.708 670.075 371.709 670.065C371.713 670.044 371.718 670.013 371.726 669.971C371.741 669.886 371.763 669.759 371.795 669.591C371.857 669.254 371.953 668.752 372.087 668.095C372.356 666.781 372.776 664.849 373.381 662.386C374.591 657.461 376.541 650.417 379.498 641.958C385.412 625.037 395.347 602.47 411.428 579.881C443.568 534.735 500.284 489.448 598.725 489L598.716 487ZM598.721 489H607.027V487H598.721V489ZM1268 487H607.027V489H1268V487ZM1504 251C1504 381.339 1398.34 487 1268 487V489C1399.44 489 1506 382.444 1506 251H1504ZM1504 233V251H1506V233H1504ZM1272 1C1400.13 1 1504 104.87 1504 233H1506C1506 103.765 1401.23 -1 1272 -1V1ZM611.027 1H1272V-1H611.027V1ZM611.027 -1H124.5V1H611.027V-1ZM124.5 -1H113.027V1H124.5V-1ZM113 1H113.027V-1H113V1ZM-35 149C-35 67.2619 31.2619 1 113 1V-1C30.1573 -1 -37 66.1573 -37 149H-35ZM-35 166.121V149H-37V166.121H-35ZM-286.009 470.82C-195.416 463.209 -137.396 429.275 -99.6594 376.022C-61.9692 322.834 -44.6005 250.491 -35.0064 166.234L-36.9936 166.007C-46.5791 250.189 -63.9056 322.107 -101.291 374.865C-138.631 427.559 -196.067 461.257 -286.176 468.828L-286.009 470.82ZM-455 663.848C-455 602.953 -440.466 556.356 -412.157 524.174C-383.859 492.003 -341.666 474.091 -286.034 470.822L-286.151 468.826C-342.152 472.116 -384.912 490.173 -413.659 522.853C-442.396 555.522 -457 602.658 -457 663.848H-455ZM-455 772.747V663.848H-457V772.747H-455ZM-305.956 966.876C-348.877 960.199 -386.09 945.625 -412.588 915.832C-439.083 886.042 -455 840.883 -455 772.747H-457C-457 841.179 -441.013 886.882 -414.083 917.161C-387.156 947.437 -349.424 962.138 -306.264 968.852L-305.956 966.876ZM-305.11 968V967.864H-307.11V968H-305.11Z" fill="white" mask="url(#path-1-inside-1_187_170)" />
        <foreignObject className='w-full h-full'>
          <div xmlns="http://www.w3.org/1999/xhtml" className=' ml-56 mt-40 flex space-x-64'>
            <div className='flex gap-12 '>
              <h1 className=' text-black text-9xl font-bold'>4</h1>
              <h3 className='text-black text-[64px] mt-4 font-medium'>SMM.</h3>
            </div>
            <p className='text-black w-[40%] text-2xl font-normal'>SMM от &quot;Spectr&quot;: мастерим эффективные стратегии, выделяем ваш бренд в соцсетях, привлекаем внимание аудитории и формируем устойчивый положительный имидж.
.</p>
          </div>
        </foreignObject>
      </svg>
    </div>,
 <Link key={5} href={'../services'} >
<div  className='ml-auto xl:mt-96 max-w-[1500px] w-[70%] lg:mt-48 mt-20'>
  <button className='bg-[#fcfafa] w-[70%] text-[64px] text-black h-[10vh] md:h-[200px] rounded-[208px] border border-white'>
    See full service
  </button>
</div>
</Link>

  ];

  return (
    <div className=" ">
      {/* Render SVG components dynamically based on visibility */}
      {Object.keys(isVisible).map((elementId, index) => (
        <div
          key={index}
          id={elementId}
          className={` md:h-[200px] h-[50px]  text-white  ${isVisible[elementId] ? `animated-slide-in-${index % 2 === 0 ? 'right' : 'left'}` : ''
            }`}
        >
          {svgComponents[index]}
        </div>
      ))}
    </div>
  );
};

export default AnimatedDivs;
