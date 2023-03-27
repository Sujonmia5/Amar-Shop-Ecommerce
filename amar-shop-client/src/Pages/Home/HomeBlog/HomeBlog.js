import React from 'react';
import Title from '../../../Components/Title/Title';
import BlogImg from '../../../asset/Rectangle 13.png'
import BlogImg2 from '../../../asset/Rectangle 14.png'
import BlogImg3 from '../../../asset/Rectangle 15.png'
import { Link } from 'react-router-dom';
import { FaRegClock, FaRegCalendar } from "react-icons/fa";

const title = 'Our Blogs'
const title2 = 'Find a bright ideal to suit your taste with our great selection'
const style = 'text-4xl font-medium leading-[54px]'

const BlogData = [
    {
        img: BlogImg,
        title: 'Going all-in with design',
        Post_time: 5,
        Post_date: '5 Jan 2020'
    },
    {
        img: BlogImg2,
        title: 'Going all-in with design',
        Post_time: 5,
        Post_date: '5 Jan 2020'
    },
    {
        img: BlogImg3,
        title: 'Going all-in with design',
        Post_time: 5,
        Post_date: '5 Jan 2020'
    }
]

const HomeBlog = () => {

    return (
        <div className=' mb-10 mt-10 text-center'>
            <Title
                title={title}
                title2={title2}
                style={style}
            />
            <div className='mt-14 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    BlogData.map((blog, i) =>
                        <div key={i} className="card w-72 md:w-80 shadow-xl rounded-none mx-auto">
                            <figure>
                                <img className='w-80' src={blog.img} alt='' />
                            </figure>
                            <div className="card-body pb-3 pt-4 px-4 text-start">
                                <p className='text-lg'>{blog.title}</p>
                                <Link to='' className='hover:underline hover:underline-offset-4 hover:text-red-600 text-xl font-bold text-center'>Read More</Link>
                                <div className='font-sans flex justify-around items-center'>
                                    <div>
                                        <p className='text-lg'>
                                            <FaRegClock className='inline mr-1' />
                                            {blog.Post_time} min
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-lg'>
                                            <FaRegCalendar className='inline mr-1' />
                                            {blog.Post_date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

            </div>
            <Link to='/' className='hover:underline hover:underline-offset-4 mt-10 hover:text-red-600 text-xl'>
                View more
            </Link >
        </div>
    );
};

export default HomeBlog;