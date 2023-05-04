import React, { useEffect, useState } from 'react';
import Recipe from '../../ChefRecipes/Recipe/Recipe';
import { ToastContainer } from 'react-toastify';

const Popular = () => {
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recipes/2")
            .then(res => res.json())
            .then(data => {
                const selected = data.recipes.slice(1, 4);
                setAllRecipes(selected)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Our Popular Recipes</h2>
                <p className='text-gray font-medium'>Explore our most popular recipes</p>
            </div>
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

export default Popular;