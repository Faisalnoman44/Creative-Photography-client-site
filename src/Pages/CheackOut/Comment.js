import React from 'react';

const Comment = ({comment}) => {
    const { photo, customer, serviceName, message} = comment
    return (
        <div className="card w-full  border border-primary mb-3">
            <div className="card-body">
                <h2 className="card-title">Service: {serviceName}</h2>
                <p>Comment: {message}</p>
                <div className="card-actions justify-end">
                    <img className='w-10 h-10 align-middle rounded-full' src={photo ? photo : 'No pic found'} alt="" />
                    <button className="font-semibold">{customer}</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;