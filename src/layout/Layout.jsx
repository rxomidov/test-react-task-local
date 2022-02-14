import React from 'react';
import Profile from "../pages/Profile/Profile";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <LayoutWrapper>
            <Header/>
            <Profile/>
            <Footer/>
        </LayoutWrapper>
    );
};

export default Layout;

const LayoutWrapper = styled.div`
  
`;