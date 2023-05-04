import React from 'react';

const ChefBanner = ({ chef }) => {
    const { id, chef_name, chef_picture, description, years_of_experience, num_recipes, likes } = chef;

    return (
        <div>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Recipes</h2>
            </div>

            <div className="card card-side bg-base-100 shadow-2xl grid grid-cols-2 items-center">
                <figure><img className='w-full h-[400px] object-cover' src={chef_picture} alt="Movie" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title font-playfair text-2xl font-bold hover:text-green-start mb-2">{chef_name}</h2>
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