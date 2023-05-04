import React, { useState } from 'react';
import Rating from 'react-rating';
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { notifySuccess } from '../../Shared/Toaster/Toaster';

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(true);

    const { recipe_name, recipe_picture, ingredients, cooking_method, rating } = recipe;

    console.log(recipe)
    return (
        <div className="card min-w-[300px] bg-base-100 shadow-xl">
            <figure><img className='h-[250px] w-full object-cover' src={recipe_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{recipe_name}</h2>

                <h4 className='font-semibold mt-4'>Ingredients: </h4>
                <ul>
                    {
                        ingredients.map((ingredient, index) => <li
                            key={index}
                            className='flex gap-3 items-center'
                        >
                            <FaCheck className='text-green-start'></FaCheck>
                            <span className='hover:text-green-start'>{ingredient}</span>
                        </li>)
                    }
                </ul>

                <h4 className='font-semibold mt-4'>Cooking Method: </h4>
                <p className='text-justify'>{cooking_method}</p>

                <div className='mt-4'>
                    <span>{rating}</span>
                </div>

                <div className="card-actions justify-end">
                    <button onClick={() => {
                        notifySuccess('Added to favorite successfully!');
                        setShow(false);
                    }} className={`badge badge-outline ${show ? "bg-green-start" : "bg-gray"} p-2.5 text-white`} disabled={!show} >Add to Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;