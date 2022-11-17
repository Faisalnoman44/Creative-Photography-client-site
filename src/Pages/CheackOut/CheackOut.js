import { comment } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Comment from './Comment';

const CheackOut = () => {
    const { name, detail, price, _id, image } = useLoaderData()
    const { user } = useContext(AuthContext);
    const [userComments, setUSerComments] = useState([])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const comment = {
            service: _id,
            serviceName: name,
            customer: fullName,
            email,
            phone,
            message,
            

        }

        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // handleModal()
                    alert('comment submit');
                    form.reset();
                }

            })
            .catch(err => console.error(err))

    }

    useEffect(() => {
        console.log(_id)
        fetch(`http://localhost:5000/comments?service=${_id}`)
            .then(res => res.json())
            .then(data => setUSerComments(data));
    }, [{_id, comment}])



    return (
        <div>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <div className="border border-primary mb-3 md:mb-6">
                        <figure><img className='w-full h-full' src={image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{detail}</p>
                            <p className='text-xl font-semibold'>Price: <span className='text-cyan-700'>${price}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='min-h-fit'>
                        <h1 className='text-2xl font-semibold text-center mb-3'>Comments</h1>
                        {
                            userComments.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
                        }
                    </div>
                    <h2 className='text-center text-xl font-semibold mb-3'>Leave your comment</h2>
                    {
                        user?.email ? <form onSubmit={handleSubmit} className='mb-3'>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <input name='firstName' type="text" placeholder="First Name" className="input w-full max-w-xs border border-primary mb-2" />
                            <input name='lastName' type="text" placeholder="Last Name" className="input w-full max-w-xs border border-primary mb-2" />
                            <input name='phone' type="text" placeholder="Phone" className="input w-full max-w-xs border border-primary mb-2" />
                            <input name='email' defaultValue={user?.email} type="email" placeholder="Type here" className="input w-full max-w-xs border border-primary mb-2" readOnly />
                        </div>
                        <textarea name='message' className="textarea w-full h-32 border border-primary my-2" placeholder="comments"></textarea>

                        <input className='btn btn-primary' type="submit" value="submit" />
                    </form> :
                    <div className='text-center justify-center text-3xl'>
                        <p>Please Login to Comment here.. <Link className='text-blue-500' to='/login' >Login</Link></p>
                    </div>
                    }
                </div>
            </div>
            {/* / modal */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheackOut;