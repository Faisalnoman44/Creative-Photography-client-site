import React from 'react';
import { titleName } from '../../../GeneralFunction/GeneralFunction';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BookMark from '../BookMark/BookMark';
import Cameras from '../Cameras/Cameras';
import Categories from '../Category/Categories';

const Home = () => {
    titleName('Creative Photograpy')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <BookMark></BookMark>
            <Cameras></Cameras>
        </div>
    );
};

export default Home;