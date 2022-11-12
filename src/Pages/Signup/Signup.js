import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/icon-256x256.png';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)

        })
        .catch(err => console.error(err));
        
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="text-center lg:text-left hidden md:block">
                    <img alt='' className='h-[400px] w-full' src={login}></img>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border border-primary">
                    <p className='text-center text-4xl font-semibold mb-4 mt-2'>Register</p>
                    <form onSubmit={handleRegister}  className="card-body   ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <p className='text-center mt-3'>Register with</p>
                        <div className='text-center w-/12 mx-auto text-3xl mb-3'>
                            <FaGoogle></FaGoogle>
                        </div>
                        <p>Already have an account? <Link to='/login' className='text-blue-500 hover:text-primary'>Login</Link></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Signup;