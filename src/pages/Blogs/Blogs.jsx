import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://chinese-lounge-server-smarifurrahman.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Blogs</h2>
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