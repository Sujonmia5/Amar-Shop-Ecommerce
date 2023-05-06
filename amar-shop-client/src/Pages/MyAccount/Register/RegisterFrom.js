import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AccountContext';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import LottieData from './26491-welcome-icon.json'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast'

const schema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    number: yup.string().required('number is required').min(11, 'number must be 11 character').max(11, 'number must be 11 character'),
    address: yup.string().required('address is required'),
    password: yup.string().required().min(6),
    confirm_password: yup.string().required('confirm password is a required field').oneOf([yup.ref('password')], "confirm password can't match"),
    checkbox: yup.boolean()
}).required('Please fill the register from')

const RegisterFrom = () => {
    // checkbox State
    const [box, setBox] = useState(false)
    // user context using
    const { registerEmail, user, registerUser, updateUser, setRegisterEmail, setLoader, loader } = useContext(AuthContext);

    const navigate = useNavigate()

    // useFrom Handler
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const registerHandler = (data) => {
        const fullName = data.firstName + ' ' + data.lastName;
        registerUser(registerEmail.email, data.password)
            .then((result) => {
                if (result.user) {
                    updateUser(fullName)
                        .then(res => {
                            setLoader(false)
                            toast.success('account Register Successfully')
                            navigate('/')
                            setRegisterEmail(null)
                        })
                        .catch(err => err)
                }
            })
            .catch((error) => {
                setLoader(false)
                toast.error(error.message)
            })
    }

    // css Style input
    const inputStyle = `input input-bordered w-full max-w-xs h-10 border-gray-700`

    if (loader) {
        return <div> Loading.....</div>
    }

    return (
        <div className='w-full grid grid-cols-2  gap-x-4 bg-primary'>
            <div className='hidden lg:inline-block '>
                <Lottie animationData={LottieData} loop={true} />
            </div>
            <div className='mt-8 sm:px-10 lg:px-2 col-span-2 lg:col-span-1 mx-auto'>
                <div>
                    <h1 className='text-4xl text-center font-bold'>Create An Account </h1>
                </div>

                <form onSubmit={handleSubmit(registerHandler)} className='my-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4'>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>First Name</label>
                            <input {...register('firstName')} className={inputStyle} type='text' placeholder='Enter your first name' />
                            <p className='text-red-600 text-sm'>{errors?.firstName?.message}</p>
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Last Name</label>
                            <input {...register('lastName')} className={inputStyle} type='text' placeholder='Enter your Last name' />
                            <p className='text-red-600 text-sm'>{errors?.lastName?.message}</p>

                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Phone Number</label>
                            <input {...register('number')} className={inputStyle} type='number' placeholder='Enter your phone Number' />
                            <p className='text-red-600 text-sm'>{errors?.number?.message}</p>

                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Address</label>
                            <input {...register('address')} className={inputStyle} type='text' placeholder='Address' />
                            <p className='text-red-600 text-sm'>{errors?.address?.message}</p>

                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='password' className='ml-1 text-base font-semibold'>Password</label>
                            <input {...register('password')} className={inputStyle} type='password' placeholder='Enter your password' />
                            <p className='text-red-600 text-sm'>{errors?.password?.message}</p>
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='password' className='ml-1 text-base font-semibold'>Confirm Password</label>
                            <input {...register('confirm_password')} className={inputStyle} type='password' placeholder='Enter your password' />
                            <p className='text-red-600 text-sm'>{errors?.confirm_password?.message}</p>
                        </div>
                    </div>
                    <div className='space-y-5 mt-4'>
                        <input {...register('checkbox')} onClick={() => setBox(!box)} id='checkbox' type='checkbox' />
                        <label htmlFor='checkbox'> Creating your account and you accepting <Link to='/' className='text-primary hover:text-accent underline'>Terms and conditions</Link></label>
                        <button type='submit' disabled={!box} className="btn btn-outline w-44 hover:bg-primary text-black hover:text-gray-800 animate-none normal-case text-base h-5 disabled:bg-slate-300 disabled:text-black disabled:cursor-no-drop" >Create Account</button>
                    </div>
                    <p className='text-end text-sm mt-2'>Already Have an Account <Link className='text-blue-600 hover:underline mr-5'>Sign in here !</Link></p>
                </form>
            </div>
        </div>
    );
};

export default RegisterFrom;