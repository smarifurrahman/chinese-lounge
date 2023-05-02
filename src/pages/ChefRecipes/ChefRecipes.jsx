import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

    const recipeId = useLoaderData();
    console.log(recipeId);

    return (
        <div>
            <p>Chef Recipes</p>
        </div>
    );
};

export default ChefRecipes;