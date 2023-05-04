import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chef_name, chef_picture, years_of_experience, num_recipes, likes } = chef;

    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure>
                <LazyLoad className='w-[230px] object-cover' height={300}>
                    <img className='w-[230px] h-[300px] object-cover' src={chef_picture} alt="Movie" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title font-playfair text-2xl font-bold hover:text-green-start mb-2">{chef_name}</h2>
                    <p>{years_of_experience} years of experience</p>
                    <p className='my-1'>{num_recipes} recipes</p>
                    <p>{likes} Likes</p>
                    <div className="card-actions mt-2">
                        <Link to={`/recipes/${id}`}>
                            <button className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-4">
                                View Recipes
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;
