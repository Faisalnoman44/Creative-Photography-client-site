import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Services/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
        </div>
    );
};

export default Home;