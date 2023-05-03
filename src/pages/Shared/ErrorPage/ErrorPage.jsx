import React from 'react';
import { useRouteError } from 'react-router-dom';
import error_Image from '../../../assets/banner/error_img.jpg';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center gap-5 w-screen h-screen'>
            <img className='w-[250px]' src={error_Image} alt="" />
            <h1 className='text-3xl font-bold hover:text-pink-start'>Oops!</h1>
            <p className='text-lg'>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className='italic text-lg'><span className="font-semibold">{error.status}</span> - {error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;