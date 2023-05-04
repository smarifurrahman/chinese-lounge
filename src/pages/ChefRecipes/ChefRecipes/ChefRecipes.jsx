import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { ToastContainer } from 'react-toastify';
import ChefBanner from '../ChefBanner/ChefBanner';

const ChefRecipes = () => {
    const [chef, setChef] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const recipeId = useLoaderData();

    useEffect(() => {
        fetch(`https://chinese-lounge-server-smarifurrahman.vercel.app/recipes/${recipeId}`)
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setAllRecipes(data.recipes)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    // console.log(chef, allRecipes)

    if (loading) {
        return <div className='w-[85%] mx-auto mt-10 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

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