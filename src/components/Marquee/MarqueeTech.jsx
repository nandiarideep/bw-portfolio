import React from 'react';
import Marquee from 'react-fast-marquee';
import html from '../../assets/html.webp';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';
import bootstrap from '../../assets/bootstrap.png';

const MarqueeTech = () => {
  const images = [
    { src: html, tooltip: 'HTML' },
    { src: css, tooltip: 'CSS' },
    { src: js, tooltip: 'JavaScript' },
    { src: react, tooltip: 'React' },
    { src: tailwind, tooltip: 'Tailwind' },
    { src: bootstrap, tooltip: 'Bootstrap' },
  ];

  return (
    <div className="overflow-hidden mt-10">
      <Marquee speed={50} gradient={true} direction='right'>
        {images.concat(images).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.tooltip}
            title={item.tooltip}
            className="w-[100px] h-[100px] cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 ease-in-out rounded-lg mx-4"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTech;
