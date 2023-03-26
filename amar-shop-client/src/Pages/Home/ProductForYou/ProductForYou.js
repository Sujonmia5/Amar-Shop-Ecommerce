import React from 'react';
import Card from '../../../Components/Card/Card';
import ProductImg from '../../../asset/Mask group 3.png'

const ProductForYou = () => {
    return (
        <div className='pt-14'>
            <div className='text-center'>
                <h1 className='text-3xl leading-[54px] font-medium'>Top Picks For You</h1>
                <p className='text-base font-medium font-sans'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className='mt-16 mb-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                    <Card
                        ProductImg={ProductImg}
                        title={'Outdoor bar table and stool'}
                        price={99}
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ProductForYou;