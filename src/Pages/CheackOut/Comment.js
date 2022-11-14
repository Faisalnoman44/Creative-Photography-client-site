import React from 'react';

const Comment = ({comment}) => {
    const {email, customer, message} = comment
    return (
        <div className="card w-full  border border-primary mb-3">
            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button className="font-semibold">{email}</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;