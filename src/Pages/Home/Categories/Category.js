import React from 'react';

const Category = ({category}) => {
    const {name, image} = category
    return (
        <div>
            <div className="border border-primary mb-3 md:mb-6">
                <figure><img className='w-full h-72' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;