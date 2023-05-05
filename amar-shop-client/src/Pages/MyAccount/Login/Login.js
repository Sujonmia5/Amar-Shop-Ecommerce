import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const SubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className='md:p-10'>
            <h2 className='text-4xl font-semibold my-9'>Log In</h2>
            <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-6'>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor='email' className='ml-1 text-base font-medium'>Username or email address</label>
                    <input {...register('email', { required: 'Email is required' })} className={errors.email ? 'input input-bordered border-red-600 w-full max-w-xs h-11' : 'input input-bordered border-gray-700 w-full max-w-xs h-11'} type='email' placeholder='Enter your email' />
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor='password' className='ml-1 text-base font-medium'>Password</label>
                    <input {...register('password', { required: 'Password is required' })} className={errors.password ? 'input input-bordered border-red-600 w-full max-w-xs h-11' : 'input input-bordered border-gray-700 w-full max-w-xs h-11'} type='password' placeholder='Enter your password' />
                </div>
                <div className='space-x-1'>
                    <input {...register('checkbox')} id='checkbox' type='checkbox' />
                    <label htmlFor='checkbox'>Remember me</label>
                </div>
                <div className='space-x-2'>
                    <button type='submit' className="btn btn-outline w-44 hover:bg-primary text-black hover:text-gray-800 animate-none normal-case text-base h-5" >Log In</button>
                    <Link to='' className='text-base hover:text-primary'>Lost Your Password? </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;