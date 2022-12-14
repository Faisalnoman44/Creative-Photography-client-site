import { comment } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import Comment from './Comment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheackOut = () => {
    titleName('Reviews - CP')
    const { name, detail, price, _id, image } = useLoaderData()
    const { user } = useContext(AuthContext);
    const [userComments, setUSerComments] = useState([])

    const notify = () => toast.success('Successfully Submited', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

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
            photo: user.photoURL,
            phone,
            message,
            time: Date()
        }
        console.log(comment)

        fetch('https://assignment-11-server-side-delta.vercel.app/comment', {
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
                    notify();
                    form.reset();
                }

            })
            .catch(err => console.error(err))

    }

    useEffect(() => {
        fetch(`https://assignment-11-server-side-delta.vercel.app/comments?service=${_id}`)
            .then(res => res.json())
            .then(data => setUSerComments(data));
    }, [_id, userComments])



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div>
                    <div className="border border-primary mb-3 md:mb-6 rounded-lg">
                        <figure><img className='w-full rounded-tl-lg rounded-tr-lg' src={image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{detail}</p>
                            <p className='text-xl font-semibold'>Price: <span className='text-cyan-700'>${price}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[550px] overflow-y-auto mb-10'>
                        <h1 className='text-2xl font-semibold text-center mb-3'>All Comments</h1>
                        {
                            userComments.length === 0 && <p className='text-3xl flex items-center justify-center mt-28 font-bold text-teal-300'>No comments</p>
                        }
                        {
                            userComments.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
                        }
                    </div>
                    <h2 className='text-center text-xl font-semibold mb-3'>Leave your comment</h2>
                    {
                        user?.email ? <form onSubmit={handleSubmit} className='mb-3'>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                                <input name='firstName' type="text" placeholder="First Name" className="input w-full md:max-w-xs border border-primary mb-2" required />
                                <input name='lastName' type="text" placeholder="Last Name" className="input w-full md:max-w-xs border border-primary mb-2" required />
                                <input name='phone' type="text" placeholder="Phone" className="input w-full md:max-w-xs border border-primary mb-2" />
                                <input name='email' defaultValue={user?.email} type="email" placeholder="Type here" className="input w-full md:max-w-xs border border-primary mb-2" readOnly />
                            </div>
                            <textarea name='message' className="textarea w-full h-32 border border-primary my-2" placeholder="comments" required></textarea>

                            <input className='btn btn-primary' type="submit" value="submit" />
                        </form> :
                            <div className='text-center justify-center text-3xl'>
                                <p>Please Login to Comment here.. <Link className='text-blue-500' to='/login' >Login</Link></p>
                            </div>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheackOut;