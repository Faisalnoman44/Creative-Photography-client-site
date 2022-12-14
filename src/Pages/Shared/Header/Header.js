import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logout, } = useContext(AuthContext)

    const menuItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to='/addservices'>Add Services</Link></li>
                    <li><Link to='/review'>My Review</Link></li>
                </> :
                <></>
        }
    </>

    const handleLogout = () => {
        logout()
            .then(data => () => { })
            .catch(err => console.error(err))
    }

    return (
        <div className='mb-16 '>
            <div className="navbar bg-primary text-white font-semibold fixed top-0 z-50 max-w-screen-xl	 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <img className='w-8 md:w-14 rounded-2xl' src={logo} alt="" />
                    <Link className="btn btn-ghost normal-case text-lg md:text-xl">Creative Photography</Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ?
                        <Link onClick={handleLogout}><button className="btn btn-warning"> LogOut </button></Link>
                        : <Link to='/login' ><button className="btn btn-warning"> Login </button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;