// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, recipe, price, image, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const handleAddToCart = item =>{
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, price, image, email: user.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your food on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from: location}})
          }
        })
      }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className=" absolute right-0 bg-slate-900 w-fit rounded px-4 py-2 mr-4 mt-4 text-white">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 text-orange-400 bg-slate-50 border-b-4 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;