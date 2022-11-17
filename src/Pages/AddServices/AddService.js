import React from 'react';
import { Link } from 'react-router-dom';

const AddService = ({service}) => {
    const { _id, name, image, price, detail } = service
    return (
        <div>
            <div className="border border-primary mb-3 md:mb-6">
                <figure><img className='w-full h-96' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.slice(0, 100) + '...'}</p>
                    <p className='text-xl font-semibold'>Price: <span className='text-cyan-700'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">Add to service</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;