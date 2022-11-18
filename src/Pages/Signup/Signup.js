import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../images/icon-256x256.png';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { titleName } from '../../GeneralFunction/GeneralFunction';

const Signup = () => {
    titleName('Register - CP')
    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photo);
                const currentUser = {
                    email: user?.email
                }

                //jwt token
                fetch('https://assignment-11-server-side-delta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('Special-token', data.token);
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => console.error(err));

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user?.email
                }

                //jwt token
                fetch('https://assignment-11-server-side-delta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('Special-token', data.token);
                        navigate(from, { replace: true })
                    })

                // navigate(from, { replace: true })
                // console.log(user);

            })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="text-center lg:text-left hidden md:block">
                    <img alt='' className='h-[400px] w-full' src={login}></img>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border border-primary">
                    <p className='text-center text-4xl font-semibold mt-2'>Register</p>
                    <form onSubmit={handleRegister} className="card-body   ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photourl' placeholder="PhotoURL" className="input input-bordered" required />
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
                        <div className="form-control mt-4 mb-0">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center '>Register with</p>
                    <div className='text-center w-11/12 mx-auto  '>
                        <button className='btn btn-ghost mx-auto text-3xl ' onClick={handleGoogleLogin}>
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <div className='ml-4 mb-3'><p>Already have an account? <Link to='/login' className='text-blue-500 hover:text-primary'>Login</Link></p></div>
                </div>
            </div>
        </div>
    );
};

export default Signup;