// import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCagegory from '../MenuCategory/MenuCagegory';

const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    const desserts = menu.filter(item=> item.category === 'dessert')
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/** main cover */}
      <Cover img={menuImg} title="our menu"></Cover>
      {/**offered menu items */}
        <SectionTitle subHeading="---don't miss---" heading="TODAY'S OFFER"></SectionTitle>
        <MenuCagegory items={offered}></MenuCagegory>
        {/**dessert menu items */}
        <MenuCagegory items={desserts} img={dessertImg} title={'Dessert'}></MenuCagegory>
        <MenuCagegory items={pizza} img={pizzaImg} title={'pizza'}></MenuCagegory>
        <MenuCagegory items={salad} img={saladImg} title={'salad'}></MenuCagegory>
        <MenuCagegory items={soup} img={soupImg} title={'soup'}></MenuCagegory>

        </div>
    );
};

export default Menu;