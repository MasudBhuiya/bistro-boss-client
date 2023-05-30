// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle subHeading='---what our client say---' heading='TESTIMONIALS'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
                reviews.map(review=><SwiperSlide key={review._id}>
                    <div className="m-24 flex flex-col items-center my-16 mx-24">
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <div className="text-9xl">
    <FontAwesomeIcon icon={faQuoteLeft} />
    </div>
                        <p className="py-4 text-center">{review.details}</p>
                        <h3 className="text-2xl text-yellow-400">{review.name}</h3>
                    </div>
                </SwiperSlide>)
            }
      </Swiper>
        </section>
    );
};

export default Testimonials;