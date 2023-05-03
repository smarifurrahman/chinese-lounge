import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(result.user, name, photo)
                    .then(() => {
                        console.log('profile updated');
                        form.reset();
                    })
                    .catch(error => {
                        console.error(error.message);
                        setError(error.message);
                    })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body p-12 pb-0 mb-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register your account</h1>
                            <hr className='mt-5' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end">Register</button>
                        </div>
                        <p className='text-pink-start text-center mt-4'>{error}</p>
                    </form>
                    <div className='px-12 pb-12'>
                        <hr />
                        <p className='text-center mt-2'>or Continue with</p>
                        <div className='flex gap-3 justify-center'>
                            <div className="form-control mt-4">
                                <button className="btn text-green-start hover:text-white bg-white hover:bg-green-start border-green-start hover:border-green-start px-6">
                                    <FaGoogle className='text-2xl' />
                                </button>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn text-green-start hover:text-white bg-white hover:bg-green-start border-green-start hover:border-green-start px-6">
                                    <FaGithub className='text-2xl' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="label-text-alt text-center mt-4">Already have an account ?
                                <span> <Link className="link link-hover text-green-start font-semibold" to="/login">Login</Link> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;