// import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[600px]">
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo perspiciatis labore mollitia alias distinctio, doloremque, nisi est facere id laboriosam expedita. Illo enim ratione dolore quidem maxime odit qui suscipit.</p>
    </div>
  </div>
</div>
    </Parallax>
        
    );
};

export default Cover;