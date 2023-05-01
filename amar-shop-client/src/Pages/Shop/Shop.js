import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { State_Context } from '../../Context/StateContext';
import ShopNav from './ShopNav/ShopNav';
import HeroBottom from '../../Components/HeroBottom/HeroBottom';

const Shop = () => {
    const { page, size, setCount, setPage, count } = useContext(State_Context)

    const id = useLocation()
    const Pathname = id.pathname.includes('shop')
    let pathname = {}
    if (Pathname) {
        pathname = {
            path1: 'Our Collection',
            path2: 'Shop'
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['product', page, size],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_localhost}/products?size=${size}&page=${page}`);
            const data = await res.json()
            setCount(data?.count)
            return data;
        }
    })
    const pages = Math.ceil(count / size);

    return (

        <div className='max-w-7xl mx-auto'>
            <DynamicHero
                Pathname={pathname}
            />
            <ShopNav
            />
            {
                isLoading ? <progress className="progress w-56"></progress> : <>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                        {
                            data?.products?.map((product, i) => <Card
                                key={i}
                                product={product}
                            ></Card>)
                        }
                        <div className="col-span-full items-center flex justify-center">
                            <div className='max-w-md'>
                                <button
                                    onClick={() => setPage((prev) => prev - 1)}
                                    className={
                                        page === 0 ? 'hidden' : 'btn btn-link text-black hover:text-primary'
                                    }>Prev</button>
                                {
                                    [...Array(pages).keys()].map(number => <button
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={page === number ? 'btn btn-primary border-none rounded-none' : 'btn border-none text-black font-sans rounded-none hover:bg-primary mx-2'}>{number + 1}
                                    </button>)
                                }
                                <button
                                    onClick={() => setPage((prev) => prev + 1)}
                                    className={
                                        pages => page ? 'hidden' : 'btn btn-link text-black hover:text-primary'
                                    }>Next</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            <HeroBottom />
        </div>
    );
}


export default Shop;