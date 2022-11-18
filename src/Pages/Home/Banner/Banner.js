import React from 'react';

import img1 from '../../../images/wedding-photography-bawa-video-photography-couple-shot-14_15_315807-159272810177431.jpeg';
import img2 from '../../../images/1stbirthday_delhiphotographer_Shambhavi_013.jpg';
import img3 from '../../../images/photo-1527529482837-4698179dc6ce.jpg';
import img4 from '../../../images/divya-naveen_00115.jpg';
import BannerItem from './BannerItem';


const Banner = () => {

    const bannerData = [
        {
            image: img4,
            prev: 4,
            next: 2,
            id: 1
        },
        {
            image: img2,
            prev: 1,
            next: 3,
            id: 2
        },
        {
            image: img3,
            prev: 2,
            next: 4,
            id: 3
        },
        {
            image: img1,
            prev: 3,
            next: 1,
            id: 4
        },
    ]

    return (
        <div className='mb-8'>
            <div className="carousel w-full mb-4">
                {
                    bannerData.map(data => <BannerItem key={data.id} data={data}></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;