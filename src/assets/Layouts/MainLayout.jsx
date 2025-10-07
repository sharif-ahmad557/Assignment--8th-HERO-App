import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;