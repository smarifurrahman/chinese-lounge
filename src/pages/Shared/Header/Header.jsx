import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    return (
        <div className="navbar bg-base-100 w-[85%] mx-auto py-5 flex items-center">
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
                    {
                        user ?
                            <li><ActiveRoute to="/registration">Register</ActiveRoute></li> :
                            <li><ActiveRoute to="/login">Login</ActiveRoute></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div style={{ "--tooltip-color": "#85B72C", "--tooltip-text-color": "#FFFFFF" }} className='tooltip tooltip-left' data-tip={user.displayName}>
                                <img className='w-[45px] h-[45px] rounded-full object-cover align-top hover:tooltip' src={user.photoURL} alt="user photo" />
                            </div>
                            <button onClick={logOut} className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">Logout</button>
                        </div> :

                        <Link to="/login" className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">Login</Link>
                }
            </div>
        </div >
    );
};

export default Header;