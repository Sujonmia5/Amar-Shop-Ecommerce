import React, { createContext, useEffect, useState } from 'react';
import { StoreData, getData } from '../utilities/AddedProduct';
import { RemoveProduct } from '../utilities/RemoveProduct';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


export const State_Context = createContext()
const StateContext = ({ children }) => {
    // Loading State 
    const [isLoading, setIsLoading] = useState(false);

    // Pagination useState
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);

    // Cart State
    const [cart, setCart] = useState([])



    const CartFetch = async () => {
        setIsLoading(true)
        const data = await getData(StoreData)
        if (data) {
            setCart(data)
            setIsLoading(false)
        }
    }


    // Remove Product from cart
    const RemoveProductToCart = (id) => {
        const remainingCart = cart.filter(product => product._id !== id)
        RemoveProduct(id)
        setCart(remainingCart)
    }


    const value = {
        count, setCount, page, setPage, size, setSize, CartFetch, cart, isLoading, RemoveProductToCart
    }

    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <State_Context.Provider value={value}>
            {children}
        </State_Context.Provider>
    );
};

export default StateContext;
