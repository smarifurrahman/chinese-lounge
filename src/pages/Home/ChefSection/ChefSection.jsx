import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { data } from 'autoprefixer';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    })

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Our Chefs</h2>
                <p className='text-gray font-medium'>Explore our chefs for the best food recipes</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
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