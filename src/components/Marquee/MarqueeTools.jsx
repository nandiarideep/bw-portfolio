import React from 'react';
import Marquee from 'react-fast-marquee';
import reactrouter from '../../assets/reactrouter.svg'
import reactfastmarquee from '../../assets/reactfastmarquee.png'
import reacticons from '../../assets/reacticons.png'
import git from '../../assets/git.png';
import github from '../../assets/github.webp';
import netlify from '../../assets/netlify.svg';
import mui from '../../assets/mui.png'

const MarqueeTools = () => {
  const images = [
    { src: reactrouter, tooltip: 'React Router' },
    { src: reactfastmarquee, tooltip: 'React Fast Marquee' },
    { src: reacticons, tooltip: 'React Icons' },
    { src: git, tooltip: 'Git' },
    { src: github, tooltip: 'GitHub' },
    { src: netlify, tooltip: 'Netlify' },
    { src: mui, tooltip: 'Material UI' },
  ];

  return (
    <div className="overflow-hidden mt-10">
      <Marquee speed={100} gradient={true}>
        {images.concat(images).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.tooltip}
            title={item.tooltip}
            className="w-[150px] h-[150px] cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 ease-in-out rounded-lg mx-4"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTools;
