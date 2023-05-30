// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <div >
    
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {
        items.slice(0, 6).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
    }
            </div>
        </SwiperSlide>
        {
             <SwiperSlide>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {
        items.slice(7, 13).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
    }
            </div>
        </SwiperSlide>
        }
        {
            items.length >= 14 && <SwiperSlide>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {
        items.slice(13, 20).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
    }
            </div>
        </SwiperSlide>
        }
      </Swiper>
    </div>
    );
};

export default OrderTab;