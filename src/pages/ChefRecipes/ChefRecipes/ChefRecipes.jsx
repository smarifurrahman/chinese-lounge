import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const [chef, setChef] = useState([]);

    const recipeId = useLoaderData();

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${recipeId}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
        </div>
    );
};

export default ChefRecipes;