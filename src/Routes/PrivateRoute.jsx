// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const loaction = useLocation()
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: loaction}} replace></Navigate>
};

export default PrivateRoute;