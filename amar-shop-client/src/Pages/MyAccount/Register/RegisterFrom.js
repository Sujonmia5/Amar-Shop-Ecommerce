import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AccountContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import LottieData from './26491-welcome-icon.json'
import { FaUpload } from 'react-icons/fa'
import Profile from '../../../asset/avatar-icon.jpg'
import { ConvertToBase64 } from '../../../utilities/utilities';


const RegisterFrom = () => {

    const { profileImg, setProfileImg, registerEmail, user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerHandler = (data) => {
        console.log(data);
    }



    const AvatarHandler = async (e) => {
        const file = e.target.files[0]
        const imagedata = await ConvertToBase64(file)
        setProfileImg(imagedata)
    }
    return (
        <div className='w-full max-h-screen grid grid-cols-2  gap-x-4 bg-primary'>
            <div>
                <Lottie animationData={LottieData} loop={true} />
            </div>
            <div className='mt-8'>
                <div>
                    <h1 className='text-4xl text-center font-bold'>Create An Account </h1>
                </div>
                <p className='text-end text-sm mt-2'>Already Have an Account <Link className='text-primary'>Sign in here!</Link></p>
                <form onSubmit={handleSubmit(registerHandler)} className='my-8'>
                    <div className='text-center mb-14 w-full'>
                        <div className='w-52 h-40 mx-auto'>
                            <label htmlFor='Avatar' className=' space-y-2'>
                                <img className='w-40 h-40 mb-2 mx-auto rounded-full' src={profileImg || Profile} alt='' />
                                <span className='w-5 h-5 border px-4 py-1 shadow-xl bg-slate-100 rounded-md mt-2'><FaUpload className='w-4 h-4 inline-flex' /> Upload your photo</span>
                            </label>
                        </div>
                        <input onChange={AvatarHandler}
                            {...register('files', { required: 'please Upload your photo' })}
                            type='file' name='image' id='Avatar' className='hidden' />
                    </div>

                    <div className='grid grid-cols-2 gap-y-6 gap-x-4'>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>First Name</label>
                            <input {...register('firstName', { required: 'First name is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.firstName ? 'border-red-600' : 'border-gray-700'}`} type='text' placeholder='Enter your first name' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Last Name</label>
                            <input {...register('lastName', { required: 'Last name is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.firstName ? 'border-red-600' : 'border-gray-700'}`} type='text' placeholder='Enter your Last name' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Phone Number</label>
                            <input {...register('number', { required: 'Number is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.firstName ? 'border-red-600' : 'border-gray-700'}`} type='number' placeholder='Enter your phone Number' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Address</label>
                            <input {...register('address', { required: 'Number is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.address ? 'border-red-600' : 'border-gray-700'}`} type='text' placeholder='Address' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='password' className='ml-1 text-base font-semibold'>Password</label>
                            <input {...register('password', { required: 'Password is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.firstName ? 'border-red-600' : 'border-gray-700'}`} type='password' placeholder='Enter your password' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='password' className='ml-1 text-base font-semibold'>Confirm Password</label>
                            <input {...register('confirm-password', { required: 'Password is required' })} className={`input input-bordered w-full max-w-xs h-10 ${errors.firstName ? 'border-red-600' : 'border-gray-700'}`} type='password' placeholder='Enter your password' />
                        </div>
                    </div>
                    <div className='space-y-5 mt-4'>
                        <input {...register('checkbox')} id='checkbox' type='checkbox' />
                        <label htmlFor='checkbox'> Creating your account and you accepting <Link to='/' className='text-primary hover:text-accent underline'>Terms and conditions</Link></label>
                        <button type='submit' className="btn btn-outline w-44 hover:bg-primary text-black hover:text-gray-800 animate-none normal-case text-base h-5" >Create Account</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default RegisterFrom;