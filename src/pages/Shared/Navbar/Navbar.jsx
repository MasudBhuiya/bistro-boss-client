// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
    <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
    <li><Link to="/order/salad">ORDER FOOD</Link></li>
    <li><Link to="/login">LOGIN</Link></li>
    </>
    return (
        <>
        <div className="navbar max-w-screen-xl fixed text-white bg-opacity-20 bg-black z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <div>
    <a className="btn btn-ghost normal-case "><div>
      <h3 className="text-xl">BISTRO BOSS</h3>
      <p className="text-md font-medium ">R e s t u r a n t</p>
      </div></a>
    
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end ga">
    <a className="btn">Get started</a>
  </div>
</div>
        </>
    );
};

export default Navbar;