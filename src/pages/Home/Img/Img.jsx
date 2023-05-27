// import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Img = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <div className='text-black text-center w-[70%]  mx-auto bg-white p-7'>
        <h1 className='text-lg sm:text-1xl md:text-3xl'>Bistro Boss</h1>
        <p className='max-h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium!</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Img;