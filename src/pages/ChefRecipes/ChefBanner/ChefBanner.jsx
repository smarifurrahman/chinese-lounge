import React from 'react';
import LazyLoad from 'react-lazy-load';

const ChefBanner = ({ chef }) => {
    const { id, chef_name, chef_picture, description, years_of_experience, num_recipes, likes } = chef;

    return (
        <div className='mb-16'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Recipes</h2>
            </div>

            <div className="card sm:card-side bg-base-100 shadow-2xl grid sm:grid-cols-2 items-center">
                <figure>
                    <LazyLoad className='w-full object-cover' height={400}>
                        <img className='w-full h-[400px] object-cover' src={chef_picture} alt="Movie" />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title font-playfair text-2xl font-bold hover:text-green-start mb-2">Id: {id}</h2>
                        <h2 className="card-title font-playfair text-2xl font-bold hover:text-green-start mb-2">Name: {chef_name}</h2>
                        <div className='text-dark'>
                            <p><span className='font-bold'>Bio:</span> {description}</p>
                            <p><span className='font-bold'>Likes:</span> {likes}</p>
                            <p className='my-1'><span className='font-bold'>Recipes:</span> {num_recipes}</p>
                            <p><span className='font-bold'>Years of experience:</span> {years_of_experience}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;