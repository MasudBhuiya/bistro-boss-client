// import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className=" absolute right-0 bg-slate-900 w-fit rounded px-4 py-2 mr-4 mt-4 text-white">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-0 text-orange-400 bg-slate-50 border-b-4 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;