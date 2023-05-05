import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import { FaFileDownload } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Spinner from '../Shared/Spinner/Spinner';

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

    const downloadPDF = () => {
        const capture = document.querySelector('#blogs');
        setLoading(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoading(false);
            doc.save('blogs.pdf');
        })
    }

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div id='blogs' className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-green-start text-4xl font-bold mb-3 font-playfair'>Blogs</h2>
            </div>
            <div className='flex justify-end mb-6'>
                <div className='inline-block'>
                    <div onClick={downloadPDF} className='bg-green-start px-4 py-1 text-white rounded-md flex items-center gap-2 hover:bg-green-end cursor-pointer'>
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