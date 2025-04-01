import React from 'react';
import { useSelector } from "react-redux";


export default function CartItem() {

    const { books } = useSelector(state => state.books.cart);

    return (<>
        {books.map((item, index) => (
            <li key={index} className='flex flex-wrap border-b p-4'>
                <p className='w-1/3 font-semibold'> {item.name} </p>
                <p className='w-1/3 text-center'> Items: {item.count} </p>
                <p className='w-1/3 text-end'> ${item.totalPrice} </p>
            </li>
        ))}
    </>)

}
