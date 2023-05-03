import React from 'react';

const Recipe = ({ recipe }) => {

    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    console.log(recipe)
    return (
        <div>
            <h2>Recipe</h2>
        </div>
    );
};

export default Recipe;