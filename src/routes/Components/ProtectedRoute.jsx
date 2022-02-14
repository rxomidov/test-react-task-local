import {Navigate, Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const ProtectedRoute = () => {
    const token = true;

    return token ? <Outlet /> : <Navigate to="/signin"/>;
};

export default ProtectedRoute;