import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddService = ({ service, handleBookMark }) => {
    const {user} = useContext(AuthContext)
    const { _id, name, image, price, detail } = service

    const bookmark = {
        name,
        image,
        price,
        detail,
        email : user?.email
    }

    return (
        <div>
            <div className="border border-primary mb-3 md:mb-6">
                <figure><img className='w-full h-96' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.slice(0, 100) + '...'}</p>
                    <p className='text-xl font-semibold'>Price: <span className='text-cyan-700'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleBookMark(bookmark)} className="btn btn-primary">Add to bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;