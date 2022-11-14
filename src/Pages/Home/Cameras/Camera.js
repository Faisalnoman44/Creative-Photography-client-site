import React from 'react';

const Camera = ({camera}) => {
    const {image} = camera
    return (
        <div className="w-full my-3 border border-primary ">
            <figure>
                <img className='w-full h-72' src={image} alt="Shoes" />
            </figure>
        </div>
    );
};

export default Camera;