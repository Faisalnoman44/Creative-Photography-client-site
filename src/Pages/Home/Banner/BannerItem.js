import React from 'react';

const BannerItem = ({data}) => {
    const {image,id, prev, next} = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img alt='' src={image} className="w-full h-[600px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle hover:bg-primary">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-primary">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;