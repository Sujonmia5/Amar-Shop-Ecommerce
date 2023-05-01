import React from 'react';

const Register = () => {
    return (
        <div className='md:p-10'>
            <h2 className='text-4xl font-semibold my-9'>Register</h2>
            <form className='space-y-6'>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor='email' className='ml-1 text-base font-medium'>Email address</label>
                    <input className='input input-bordered border-gray-700 w-full max-w-xs h-11' type='email' placeholder='Enter your email' />
                </div>
                <div className='flex flex-col space-y-3 font-light text-base w-[380px]'>
                    <p>A link to set a new password will be sent to your email address.</p>
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className='font-bold'>privacy policy.</strong></p>
                </div>
                <div className='space-x-2'>
                    <button className="btn btn-outline w-44 hover:bg-primary text-black hover:text-gray-800 animate-none normal-case text-base h-5">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;