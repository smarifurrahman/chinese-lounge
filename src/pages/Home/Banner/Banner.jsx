import React from 'react';
import banner1 from '../../../assets/banner/banner-1.jpg';
import banner2 from '../../../assets/banner/banner-2.jpg';
import banner3 from '../../../assets/banner/banner-3.jpg';
import banner4 from '../../../assets/banner/banner-4.jpg';
import { HiArrowRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-[540px] object-cover" />
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white w-[85%] mx-auto">
                    <div className='w-1/2'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Delicious Recipes Straight from the Wok</h1>
                        <p className='font-medium my-5'>From Classic Stir-Fries to Sizzling Noodles, Discover Authentic Chinese Cuisine in Your Own Kitchen</p>
                        <a className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">
                            View Recipe
                            <span className='ml-2'>
                                <HiArrowRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-[540px] object-cover" />
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white w-[85%] mx-auto">
                    <div className='w-1/2'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Delicious Recipes Straight from the Wok</h1>
                        <p className='font-medium my-5'>From Classic Stir-Fries to Sizzling Noodles, Discover Authentic Chinese Cuisine in Your Own Kitchen</p>
                        <a className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">
                            View Recipe
                            <span className='ml-2'>
                                <HiArrowRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full h-[540px] object-cover" />
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white w-[85%] mx-auto">
                    <div className='w-1/2'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Delicious Recipes Straight from the Wok</h1>
                        <p className='font-medium my-5'>From Classic Stir-Fries to Sizzling Noodles, Discover Authentic Chinese Cuisine in Your Own Kitchen</p>
                        <a className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">
                            View Recipe
                            <span className='ml-2'>
                                <HiArrowRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full h-[540px] object-cover" />
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white w-[85%] mx-auto">
                    <div className='w-1/2'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Delicious Recipes Straight from the Wok</h1>
                        <p className='font-medium my-5'>From Classic Stir-Fries to Sizzling Noodles, Discover Authentic Chinese Cuisine in Your Own Kitchen</p>
                        <a className="btn bg-green-start hover:bg-green-end border-green-start hover:border-green-end px-6">
                            View Recipe
                            <span className='ml-2'>
                                <HiArrowRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-green-start hover:border-green-start">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;