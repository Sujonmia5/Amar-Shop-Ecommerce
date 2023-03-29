import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import ShopNav from './ShopNav/ShopNav';



const Shop = () => {
    const id = useLocation()
    const Pathname = id.pathname.split('/')[2]

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['product-data'],
        queryFn: async () => {
            const res = await fetch('Product.json');
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <h>Loading.............</h>
    }
    console.log(products);
    return (

        <div className='max-w-7xl mx-auto'>
            <DynamicHero
                Pathname={Pathname}
            />
            <ShopNav />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                {
                    products.map((product, i) => <Card
                        key={i}
                        product={product}
                    ></Card>)
                }
                <div className="btn-group">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;