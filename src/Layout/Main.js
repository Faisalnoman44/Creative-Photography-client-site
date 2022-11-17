import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import ScrollToTop from '../ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop><Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ScrollToTop>
        </div>
    );
};

export default Main;