import React from 'react';

const HeroBottom = () => {
    return (
        <div className='w-full h-auto sm:h-56 bg-secondary my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-24 items-center gap-10 py-4 lg:py-0'>
            <div className='space-y-2'>
                <h2 className='text-2xl font-bold'>Free Delivery</h2>
                <p>For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className='space-y-2'>
                <h2 className='text-2xl font-bold'>90 Days Return</h2>
                <p>If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div className='space-y-2'>
                <h2 className='text-2xl font-bold'>Secure Payment</h2>
                <p>100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    );
};

export default HeroBottom;