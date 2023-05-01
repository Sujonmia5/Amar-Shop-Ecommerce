import React, { useContext } from 'react';
import { Tabs_Context } from '../../../Context/TabsContext';

const ProductDescription = ({ data }) => {
    const { setTab1, tab1, setTab2, tab2, setTab3, tab3, } = useContext(Tabs_Context)

    const { product_img, product_name, description, colors_available, category, Type, size, price } = data;

    const tabsActive1 = `${tab1 ? 'text-black' : 'text-gray-400 hover:text-black'}`
    const tabsActive2 = `${tab2 ? 'text-black' : 'text-gray-400 hover:text-black'}`
    const tabsActive3 = `${tab3 ? 'text-black' : 'text-gray-400 hover:text-black'}`

    return (
        <div className=''>
            <div className='w-full h-[1.5px] bg-gray-400 my-10' />
            <div className="tabs justify-center text-lg md:text-xl gap-x-10">
                <a onClick={() => {
                    setTab1(true)
                    setTab2(false)
                    setTab3(false)
                }} className={tabsActive1} href='#description'>Description</a>
                <a onClick={() => {
                    setTab1(false)
                    setTab2(true)
                    setTab3(false)
                }}
                    className={tabsActive2} href='#additional-information'>Additional Information</a>
                <a onClick={() => {
                    setTab1(false)
                    setTab2(false)
                    setTab3(true)
                }} className={tabsActive3} href='#reviews'>Reviews [5]</a>
            </div>

            <div className="carousel max-w-5xl mx-auto my-9">
                <div id="description" className="carousel-item w-full px-5 md:px-0">
                    <div className='space-y-5 text-justify'>
                        <p>{description.slice(0, 198)}</p>
                        <p>{description.slice(198)}</p>
                    </div>
                </div>
                <div id="additional-information" className="carousel-item w-full px-5 md:px-0">
                    <div className='space-y-5 text-justify'>
                        <p>{description.slice(0, 198)}</p>
                        <p>{description.slice(198)}</p>
                    </div>
                </div>
                <div id="reviews" className="carousel-item w-full px-5 md:px-0">
                    <div className='space-y-5 text-justify'>
                        <p>Reviews</p>
                    </div>
                </div>
            </div>

            <div className='md:max-h-80 max-w-5xl mx-auto grid md:grid-cols-2 gap-7'>
                <figure>
                    <img className='max-h-80 w-full ' src={product_img} alt='' />
                </figure>
                <figure>
                    <img className='max-h-80 w-full ' src={product_img} alt='' />
                </figure>
            </div>
        </div>
    );
};

export default ProductDescription;