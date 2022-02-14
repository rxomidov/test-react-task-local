import {Navigate, Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const ProtectedRoute = () => {
    const loginState = useSelector((state) => state.login.loginSuccess);

    return loginState ? <Outlet /> : <Navigate to="/signin"/>;
};

export default ProtectedRoute;