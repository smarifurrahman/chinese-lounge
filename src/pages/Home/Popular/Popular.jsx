import React, { useEffect, useState } from 'react';
import Recipe from '../../ChefRecipes/Recipe/Recipe';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';

const Popular = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://chinese-lounge-server-smarifurrahman.vercel.app/recipes/2")
            .then(res => res.json())
            .then(data => {
                const selected = data.recipes.slice(1, 4);
                setAllRecipes(selected)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Our Popular Recipes</h2>
                <p className='text-gray font-medium'>Explore our most popular recipes</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20'>
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