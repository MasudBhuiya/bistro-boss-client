// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCagegory = ({items, title, subTitle, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mb-10 mt-16">
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className="flex items-center justify-center">
        <Link to={`/order/${title}`}><button className='btn btn-outline bg-slate-50 border-0 border-b-4 text-black mb-4'>ORDER NOW</button></Link>
        </div>
        </div>
    );
};

export default MenuCagegory;