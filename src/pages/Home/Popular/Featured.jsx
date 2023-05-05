import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const Featured = () => {
    const [imageLink, setImageLink] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://chinese-lounge-server-smarifurrahman.vercel.app/recipes/5")
            .then(res => res.json())
            .then(data => {
                const images = data.recipes.map(recipe => recipe.recipe_picture);
                console.log(images)
                setImageLink(images)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <section className="text-gray-600 body-font mt-20 w-[85%] mx-auto">
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Featured Recipes</h2>
                <p className='text-gray font-medium'>Explore our featured recipes</p>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[220px] object-center block" src={imageLink[0]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[220px] object-center block" src={imageLink[1]} />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-[300px] object-cover object-center block" src={imageLink[2]} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-[300px] object-cover object-center block" src={imageLink[3]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[220px] object-center block" src={imageLink[4]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[220px] object-center block" src={imageLink[5]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;