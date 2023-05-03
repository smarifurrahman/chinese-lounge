import React from 'react';
import Rating from 'react-rating';
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { notifySuccess } from '../../Shared/Toaster/Toaster';

const Recipe = ({ recipe }) => {

    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    console.log(recipe)
    return (
        <div className="card min-w-[300px] bg-base-100 shadow-xl">
            <figure><img src={'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} alt="Shoes" /></figure>
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
                    <div onClick={() => notifySuccess('Added to favorite successfully!')} className="badge badge-outline bg-green-start p-2.5 text-white cursor-pointer">Add to Favorite</div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;