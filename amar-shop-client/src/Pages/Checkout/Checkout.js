import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { AuthContext } from '../../Context/AccountContext';
import './Checkout.css'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { pathname, state: cart } = useLocation()

    const checkout = pathname.includes('checkout')

    let path = {}
    if (checkout) {
        path = {
            path1: 'Checkout',
            path2: 'checkout'
        }
    }


    return (
        <div>
            <DynamicHero Pathname={path} />
            <div className='grid grid-cols-2 gap-6 px-24 my-5'>
                <div className='px-16 pt-5'>
                    <h1 className='text-4xl font-bold text-center'>Billing Details</h1>
                    <form className='my-9 space-y-8'>
                        <div className='grid grid-cols-2 gap-7'>
                            <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                                <label htmlFor='first_name' className='ml-1 text-base font-semibold'>First Name</label>
                                <input className="h-10 w-full px-2 border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />
                                {/* <p className='text-red-600 text-sm'>{errors?.firstName?.message}</p> */}
                            </div>
                            <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                                <label htmlFor='last_name' className='ml-1 text-base font-semibold'>Last Name</label>
                                <input className="h-10 w-full px-2 border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />
                                {/* <p className='text-red-600 text-sm'>{errors?.lastName?.message}</p> */}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0'>
                            <label htmlFor='company_name' className='ml-1 text-base font-semibold'>Company Name (Optional)</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />

                            {/* <p className='text-red-600 text-sm'>{errors?.address?.message}</p> */}

                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='country_region' className='ml-1 text-base font-semibold'>Country / Region</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='street_address' className='ml-1 text-base font-semibold'>Street address</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='town_city' className='ml-1 text-base font-semibold'>Town / City</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='text' />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='zip_code' className='ml-1 text-base font-semibold'>ZIP code</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='number' />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='number' className='ml-1 text-base font-semibold'>Phone Number</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='number' />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='email' className='ml-1 text-base font-semibold'>Email</label>
                            <input className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" type='email' defaultValue={user?.email} />
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                        <div className='flex flex-col space-y-1 mx-auto sm:mx-0 '>
                            <label htmlFor='zip_code' className='ml-1 text-base font-semibold'></label>
                            <textarea className="h-10 px-2 w-full max-w-md border rounded-md border-gray-700 focus:border-primary focus-visible:border-primary input-primary" placeholder='Additional information'>

                            </textarea>
                            {/* <p className='text-red-600 text-sm'>{errors?.password?.message}</p> */}
                        </div>
                    </form>
                </div>
                <div className='py-20 px-16'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-start'>Product</th>
                                <th className='text-end'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Peter</td>
                                <td className='text-end'>Griffin</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td className='text-end'>Rs.50202</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className='text-end'>Rs.50202</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='w-full h-[1px] bg-gray-300 my-5'></div>
                    <div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start">
                                <input type="radio" name="radio-10" className="mr-2 checked:bg-black" checked />
                                <span className="text-black text-start">Visa/Master Card</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start">
                                <input type="radio" name="radio-10"
                                    className="mr-2 checked:bg-black"
                                />
                                <span className="text-black text-start">Cash On Delivery</span>
                            </label>
                        </div>
                    </div>
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <div className='flex justify-center mt-3 items-center'>
                        <button state={cart} className="btn btn-outline w-48 hover:bg-primary text-black hover:text-gray-800 animate-none">Confirm Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;