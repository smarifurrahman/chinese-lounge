import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { ToastContainer } from 'react-toastify';

const ChefRecipes = () => {
    const [chef, setChef] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);

    const recipeId = useLoaderData();

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${recipeId}`)
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setAllRecipes(data.recipes)
            })
            .catch(error => console.error(error))
    }, [])

    // console.log(chef, allRecipes)

    return (
        <div>
            <div className='grid grid-cols-3 gap-6 w-[85%] mx-auto'>
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