import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Chef = () => {
    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure className='w-[40%]'><img src="https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?w=740&t=st=1683055811~exp=1683056411~hmac=acbfd5bc2f26d0a727d6dc8704c747bc10cabb795d149d3725f61d3272c402a7" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title font-playfair text-2xl font-bold hover:text-green-start mb-2">Arifur Rahman</h2>
                <p>5 Years of experience</p>
                <p className='my-1'>10 recipes</p>
                <p>1.5k Likes</p>
                <div className="card-actions mt-2">
                    <Link to={`/recipes/1`}>
                        <button className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">
                            View Recipes
                            <span className='ml-2'>
                                <HiArrowRight />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;
