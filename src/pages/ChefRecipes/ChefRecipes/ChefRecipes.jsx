import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { ToastContainer } from 'react-toastify';
import ChefBanner from '../ChefBanner/ChefBanner';

const ChefRecipes = () => {
    const [chef, setChef] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);

    const recipeId = useLoaderData();

    useEffect(() => {
        fetch(`https://chinese-lounge-server-smarifurrahman.vercel.app/recipes/${recipeId}`)
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setAllRecipes(data.recipes)
            })
            .catch(error => console.error(error))
    }, [])

    // console.log(chef, allRecipes)

    return (
        <div className='w-[85%] mx-auto'>
            <ChefBanner
                chef={chef}
            ></ChefBanner>
            <div className='grid grid-cols-3 gap-6 mt-20'>
                {
                    allRecipes.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefRecipes;