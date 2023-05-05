import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { ToastContainer } from 'react-toastify';
import ChefBanner from '../ChefBanner/ChefBanner';
import Spinner from '../../Shared/Spinner/Spinner';

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
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <ChefBanner
                chef={chef}
            ></ChefBanner>
            <hr className='border-green-start md:hidden' />
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
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