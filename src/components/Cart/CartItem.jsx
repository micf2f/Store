import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';


export default function CartItem() {

    const { books } = useSelector(state => state.books.cart);

    return (<>
        {books.map((item, index) => (
            <NavLink to={`/books/${item.id}`} >
                <li key={index} className='flex flex-wrap border-b p-4'>
                    <p className='w-1/3 font-semibold text-gray-600 hover:text-blue-600 hover:underline'> {item.name} </p>
                    <p className='w-1/3 text-center'> Items: {item.count} </p>
                    <p className='w-1/3 text-end'> ${Number(item.totalPrice.toFixed(2))} </p>
                </li>
            </NavLink>
        ))}
    </>)

}
