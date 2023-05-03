import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body p-12">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register your account</h1>
                            <hr className='mt-5' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4 mb-6">
                            <button className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end">Register</button>
                        </div>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;