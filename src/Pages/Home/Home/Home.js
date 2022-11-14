import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Categories from '../Category/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <Cameras></Cameras>
        </div>
    );
};

export default Home;