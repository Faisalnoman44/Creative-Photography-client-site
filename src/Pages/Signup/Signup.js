import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/icon-256x256.png';
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left hidden md:block">
                    <img alt='' className='h-[400px] w-full' src={login}></img>
                </div>
                <form className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-center mt-3'>Register with</p>
                        <div className='text-center w-/12 mx-auto text-3xl mb-3'>
                            <FaGoogle></FaGoogle>
                        </div>
                        <p>Already have an account? <Link to='/login' className='text-blue-500 hover:text-primary'>Login</Link></p>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Signup;