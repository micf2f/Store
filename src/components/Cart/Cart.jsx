import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../store/features/books/slice';

import CartItem from './CartItem';


export default function Cart() {

    const { cart } = useSelector(state => state.books);
    const dispatch = useDispatch();


    const handlePurchase = (e) => {
        e.preventDefault();
        dispatch(removeCart());
    }


    return (

        <div className='min-h-screen my-4'>
            <ul> <CartItem /> </ul>
            <div className='flex justify-between mt-4'>
                <p className='font-semibold'> Total price: ${cart.totalPrice} </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4"
                    onClick={handlePurchase}>
                    Purchase
                </button>
            </div>
        </div>

    )
}
