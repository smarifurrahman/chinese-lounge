import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Subscribe to Our Newsletter</h2>
                <p className='text-gray font-medium'>Get access to our latest recipes by joining the weekly newsletter</p>
            </div>
            <div className="form-control">
                <div className="input-group flex justify-center">
                    <input type="email" name='email' required placeholder="Enter your email address" className="input input-bordered" />
                    <button className="btn btn-square w-[120px] bg-green-start hover:bg-green-end border-green-start hover:border-green-end">
                        <div className='flex justify-center gap-2'>
                            <span className='bg-transparent m-0 p-0'>Submit</span>
                            <span className='bg-transparent m-0 p-0 text-lg'><FaTelegramPlane /></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;