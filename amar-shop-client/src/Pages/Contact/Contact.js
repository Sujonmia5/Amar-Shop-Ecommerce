import React from 'react';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { useLocation } from 'react-router-dom';
import { MdLocationOn, MdPhone } from "react-icons/md"
import { BsFillClockFill } from "react-icons/bs"
import HeroBottom from '../../Components/HeroBottom/HeroBottom';

const Contact = () => {


    const URL = useLocation()
    const path = URL.pathname.includes('contact')
    let Pathname = {}
    if (path) {
        Pathname = {
            path1: 'Contact',
            path2: 'Contact'
        }
    }

    return (
        <div>
            <DynamicHero Pathname={Pathname} />
            <div className='text-center py-16'>
                <h1 className='text-4xl font-bold'>Get In Touch With Us</h1>
                <p className='text-justify sm:text-center px-1 sm:w-1/2 mx-auto mt-2'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className='px-2 lg:px-32 xl:px-48 pt-10 sm:pt-24 md:flex gap-x-6'>
                    {/*Shop Address */}
                    <div className='w-auto md:w-96 space-y-7 flex justify-center flex-col items-center'>
                        <div className='sm:pl-11 sm:pr-16'>
                            <div className='flex items-center gap-x-4'>
                                <MdLocationOn className='w-6 h-6' />
                                <h2 className='text-2xl font-semibold'>Address</h2>
                            </div>
                            <p className='w-[212px] text-left pl-10'><small>236 5th SE Avenue, New York NY10000, United States</small></p>
                        </div>
                        <div className='sm:pl-11 sm:pr-16'>
                            <div className='flex items-center gap-x-4'>
                                <MdPhone className='w-6 h-6 font-bold' />
                                <h2 className='text-2xl font-semibold'>Phone</h2>
                            </div>
                            <p className='w-[212px] text-left pl-10'><small>236 5th SE Avenue, New York NY10000, United States</small></p>
                        </div>
                        <div className='sm:pl-11 sm:pr-16'>
                            <div className='flex items-center gap-x-4'>
                                <BsFillClockFill className='w-6 h-6' />
                                <h2 className='text-2xl font-semibold'>Working Time</h2>
                            </div>
                            <p className='w-[212px] text-left pl-10'><small>236 5th SE Avenue, New York NY10000, United States</small></p>
                        </div>
                    </div>

                    {/* Contact from */}
                    <div className='text-left w-full lg:pl-20 flex md:inline-block justify-center items-center mt-10 md:mt-0'>
                        <form className='space-y-8'>
                            <div>
                                <label className='block text-base font-semibold mb-2' htmlFor=''>Your name</label>
                                <input className='input input-bordered border border-black  md:w-2/3' type='text' placeholder='Enter your name' />
                            </div>
                            <div>
                                <label className='block text-base font-semibold mb-2' htmlFor=''>Email address</label>
                                <input className='input input-bordered border border-black  md:w-2/3' type='email' placeholder='Enter your name' />
                            </div>
                            <div>
                                <label className='block text-base font-semibold mb-2' htmlFor=''>Subject</label>
                                <input className='input input-bordered border border-black  md:w-2/3' type='text' placeholder='Subject' />
                            </div>
                            <div>
                                <label className='block text-base font-semibold mb-2' htmlFor=''>Massage</label>
                                <textarea className="textarea textarea-bordered border border-black  md:w-2/3" placeholder="Hi! i’d like to ask about"></textarea>
                            </div>
                            <div>
                                <input type='submit' className='btn btn-outline text-black btn-sm w-52 hover:bg-primary duration-500' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <HeroBottom />
        </div>
    );
};

export default Contact;