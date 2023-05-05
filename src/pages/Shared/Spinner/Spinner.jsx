import React from 'react';

const Spinner = () => {
    return (
        <div className='w-[85%] mx-auto mt-10 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Spinner;