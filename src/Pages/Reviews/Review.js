import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ comment, handleDelete }) => {
    const {_id,customer, serviceName, message } = comment
    return (
        <div className="card w-full border border-primary mb-3">
            <div className="card-body">
                <h2 className="card-title">{serviceName ? serviceName : 'No service found'}</h2>
                <p>Comment: {message }</p>
                <div className="card-actions justify-end">
                    <Link to={`/updatereview/${_id}`}><button className="btn btn-primary">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)}  className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Review;