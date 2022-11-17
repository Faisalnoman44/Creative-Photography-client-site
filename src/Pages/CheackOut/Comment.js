import React from 'react';

const Comment = ({comment}) => {
    const {customer, serviceName, message} = comment
    return (
        <div className="card w-full  border border-primary mb-3">
            <div className="card-body">
                <h2 className="card-title">Service: {serviceName}</h2>
                <p>Comment: {message}</p>
                <div className="card-actions justify-end">
                    <button className="font-semibold">{customer}</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;