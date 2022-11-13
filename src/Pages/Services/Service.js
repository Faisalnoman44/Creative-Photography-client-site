import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, _id, price, image, detail } = service
    return (
        <div className="card  bg-base-100 border border-primary shadow-md my-4">
            <figure className=''><img className='h-full w-full' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-gray-600">{name}</h2>
                <p className='text-gray-700'>{detail}</p>
                <p className='text-xl'>Price: <span className='text-primary font-bold'>${price}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} ><button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;