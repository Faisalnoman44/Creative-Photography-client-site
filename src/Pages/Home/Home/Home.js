import React from 'react';
import { titleName } from '../../../GeneralFunction/GeneralFunction';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Categories from '../Category/Categories';

const Home = () => {
    titleName('Creative Photograpy')
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