import React from 'react';
import { Link } from 'react-router-dom';

const BookMarkService = ({service, handleDelete}) => {
    const { _id, name, image, price, detail } =service

   

    return (
        <div>
            <div className="border border-primary mb-3 md:mb-6 h-full">
                <figure>
                    <img className='w-full h-72'  src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.slice(0, 100) + '...'}</p>
                    <p className='text-xl font-semibold'>Price: <span className='text-cyan-700'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Remove From BookMark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookMarkService;