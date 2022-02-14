import React, {useEffect} from 'react';
import {Route, useNavigate, Routes} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import {useSelector} from "react-redux";
import {MetroSpinner} from "react-spinners-kit";

const loading = (
    <div className="d-flex pt-5 mt-5 align-items-center justify-content-center">
        <MetroSpinner size={50} color={`rgba(28, 144, 255, 0.5)`} loading={true}/>
    </div>
);

// pages
const SignIn = React.lazy(() => import('../pages/SignIn/SignIn'));
const SignUp = React.lazy(() => import('../pages/SignUp/SignUp'));
const Layout = React.lazy(() => import('../layout/Layout'));

const Routers = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const loginState = useSelector((state) => state.login.loginSuccess);

    useEffect(() => {
        if (token || loginState.loginSuccess) {
            navigate("/");
        }
    }, [token, navigate, loginState]);

    return (
        <React.Suspense fallback={loading}>
            <Routes>
                <Route exact path="/signin" element={<SignIn/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/" element={
                    // <ProtectedRoute>
                        <Layout/>
                    // </ProtectedRoute>
                }/>
            </Routes>
        </React.Suspense>
    );
};

export default Routers;