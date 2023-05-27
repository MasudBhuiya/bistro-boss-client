// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Img from "../Img/Img";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Img></Img>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;