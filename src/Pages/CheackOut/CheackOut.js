import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheackOut = () => {
    const { name, detail, price, _id, image } = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const comment = {
            service : _id,
            customer: name,
            email,
            phone,
            message,

        }

    }

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-3'>{name}</h1>
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
                    <div>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center text-2xl font-semibold'>Comments</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <input name='firstName'  type="text" placeholder="Type here" className="input w-full max-w-xs border border-primary my-2" />
                            <input name='lastName' type="text" placeholder="Type here" className="input w-full max-w-xs border border-primary my-2" />
                            <input name='phone' type="text" placeholder="Type here" className="input w-full max-w-xs border border-primary my-2" />
                            <input name='email' defaultValue={user?.email} type="text" placeholder="Type here" className="input w-full max-w-xs border border-primary my-2" readOnly />
                        </div>
                        <textarea name='message' className="textarea w-full h-32 border border-primary my-2" placeholder="comments"></textarea>

                        <input className='btn btn-primary' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheackOut;