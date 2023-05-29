// import React from 'react';

import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCagegory = ({items, title, subTitle, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 my-16">
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        </div>
    );
};

export default MenuCagegory;