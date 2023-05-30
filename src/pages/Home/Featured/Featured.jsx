// import React from 'react';
import featured from '../../../assets/home/featured.jpg'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle subHeading="---check it out---" heading="FEATURED ITEM"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='font-semibold'>Aug 20, 2022</p>
                    <p className='uppercase font-semibold'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea tempore labore tempora enim eligendi natus repudiandae error. Eos voluptatem enim veritatis rem iusto, repellat optio perferendis et architecto doloremque corrupti itaque explicabo nesciunt debitis vel suscipit adipisci rerum neque cupiditate veniam. Ullam velit eum distinctio voluptatem illo ipsa doloribus?</p>
                    <button className='btn btn-outline border-0 border-b-4 bg-slate-50 text-white mt-4'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;