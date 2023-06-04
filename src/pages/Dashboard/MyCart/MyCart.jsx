// import React from 'react';
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    //how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Total Items: {cart.length}</h1>
                <h1 className="text-xl font-bold">Total Price: ${total}</h1>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-100">
                                <th>
                                    <th>#</th>
                                </th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <>
                                    <tr key={item._id}>
                                        <td className=" text-center">
                                            {index + 1}.
                                        </td>
                                        <td>
                                            <img className="w-12 h-12 rounded" src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className="text-end">${item.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost  text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;