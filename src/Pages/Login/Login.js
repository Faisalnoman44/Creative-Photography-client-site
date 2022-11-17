import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPic from '../../images/icon-256x256.png';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { titleName } from '../../GeneralFunction/GeneralFunction';


const Login = () => {
    titleName('Login - CP')
    const { login, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result?.user;
                console.log(user);

                const currentUser = {
                    email: user?.email
                }
                console.log(currentUser)


                //jwt token
                fetch('http://localhost:5000/jwt', {
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

                setError('')



            })
            .catch(err => console.error(err));

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user);

            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="text-center lg:text-left hidden md:block">
                    <img alt='' className='h-[400px] w-full' src={loginPic}></img>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100 border border-primary">
                    <p className='text-center text-4xl font-semibold mb-4 mt-2'>Login</p>
                    <form onSubmit={handleLogin} className="card-body ">

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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='text-center mt-3'>Login with</p>
                        <div onClick={handleGoogleLogin} className='text-center w-/12 mx-auto text-3xl mb-3'>
                            <FaGoogle></FaGoogle>
                        </div>
                        <p>New Here? <Link to='/register' className='text-blue-500 hover:text-primary'>Register</Link></p>
                    </form>
                    <p className='text-center text-red-500 pb-3'>{error}</p>
                </div>

            </div>
        </div>
    );
};

export default Login;
