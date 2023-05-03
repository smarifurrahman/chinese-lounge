import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 w-[85%] mx-auto py-5">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                <Link to="/" className="normal-case text-xl">Chinese Lounge</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ActiveRoute to="/">Home</ActiveRoute></li>
                    <li><ActiveRoute to="/blogs">Blog</ActiveRoute></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/164/164600.png?w=740&t=st=1683040299~exp=1683040899~hmac=3e533d18def3d14c1a6ea92cbeb11f5e3672a892eecb494732ebb44d669f5c53" alt="" /> :

                        <Link to="/login" className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;