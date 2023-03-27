import React from 'react';
import Title from '../../../Components/Title/Title';

const Social = () => {

    const title = 'Our Facebook Page'
    const title2 = 'Follow our store on Facebook Page'
    const style = 'text-5xl font-bold leading-[90px]'
    return (
        <div className='our-social h-96 w-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <Title
                    title={title}
                    title2={title2}
                    style={style}
                />
                <a href='https://www.facebook.com/JR.Developer.sujon' target='_blank' className='btn btn-link text-black no-underline shadow-2xl rounded-5xl bg-[#FAF4F4]' rel="noreferrer" >Follow Us</a>
            </div>
        </div>
    );
};

export default Social;