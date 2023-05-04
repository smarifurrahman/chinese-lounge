import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import { FaFileDownload } from "react-icons/fa";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chinese-lounge-server-smarifurrahman.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
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
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Blogs</h2>
            </div>
            <div className='flex justify-end mb-6'>
                <div className='inline-block'>
                    <div className='bg-green-start px-4 py-1 text-white rounded-md flex items-center gap-2 hover:bg-green-end cursor-pointer'>
                        <span>Save as pdf</span>
                        <span><FaFileDownload /></span></div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;