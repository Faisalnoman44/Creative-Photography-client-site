import React from 'react';

const Review = ({ comment, handleDelete }) => {
    const {_id,customer, message } = comment
    return (
        <div className="card w-full border border-primary mb-3">
            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button onClick={() => handleDelete(_id)}  className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Review;