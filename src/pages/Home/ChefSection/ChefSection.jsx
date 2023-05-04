import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { data } from 'autoprefixer';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chinese-lounge-server-smarifurrahman.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    if (loading) {
        return <div className='w-[85%] mx-auto mt-10 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Our Chefs</h2>
                <p className='text-gray font-medium'>Explore our chefs for the best food recipes</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefSection;