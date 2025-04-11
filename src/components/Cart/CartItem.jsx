import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from 'react-router-dom';

import { removeFromCart } from '../../store/features/books/slice';


export default function CartItem() {

    const { books } = useSelector(state => state.books.cart);
    const dispatch = useDispatch();


    const handleDelete = (event, id) => {
        event.preventDefault();
        dispatch(removeFromCart(id));
    };


    return (<>
        {books.map((item) => (
            <li key={item.id} className='flex border-b p-4 items-center'>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-4 border border-gray-400 rounded shadow"
                    onClick={(event) => handleDelete(event, item.id)}>
                    <svg className="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6Z" />
                        <path d="M9 8H11V17H9V8ZM13 8H15V17H13V8Z" />
                    </svg>
                </button>

                <NavLink to={`/books/${item.id}`} className='flex flex-1 items-center'>
                    <p className='flex-1 font-semibold text-gray-600 hover:text-blue-600 hover:underline'> {item.name} </p>
                    <p className='flex-1 text-center'> Items: {item.count} </p>
                    <p className='flex-1 text-end'> ${Number(item.totalPrice.toFixed(2))} </p>
                </NavLink>
            </li>

        ))}
    </>)

}
