// import React from 'react';

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CassUs from "../CallUs/CassUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Img from "../Img/Img";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Img></Img>
            <PopularMenu></PopularMenu>
            <CassUs></CassUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;