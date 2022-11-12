import React from 'react';

const Service = ({service}) => {
    const {name, id, price, image, detail} = service
    return (
        <div className="card  bg-base-100 border border-primary shadow-md my-4">
            <figure className=''><img className='h-full' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-gray-600">{name}</h2>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima aut suscipit voluptatum iure ipsum saepe necessitatibus veniam a mollitia est, tempora facere incidunt dolores quas vel quae dolorem eveniet consectetur. Veritatis sit beatae dolores itaque reiciendis facilis sapiente placeat, recusandae velit expedita illo in ea debitis saepe ipsam rem cum accusantium eveniet maiores minima ab nostrum suscipit?</p>
                <p className='text-xl'>Price: <span className='text-primary font-bold'>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Service;