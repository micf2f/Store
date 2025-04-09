import React from 'react';
import { NavLink } from "react-router-dom";

import imageNotFound from '../../images/notFound.png';


export default function Item({ books }) {
    return (<>

        {books.map(book => (

            <li key={book.id} className="w-1/4 my-6 px-3">

                <NavLink to={`/books/${book.id}`} >

                    <div className='flex justify-center items-center bg-stone-100'>
                        {book.image.length ? <img src={book.image} className='w-60 h-80 my-4' /> : <img src={imageNotFound} className='w-60 h-80 my-4' />}
                    </div>

                    <h2 className='font-semibold text-xl overflow-hidden text-ellipsis whitespace-nowrap'>
                        {book.title}
                    </h2>
                    <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{book.author}</p>

                    <div className='flex justify-between items-center'>
                        <p className='text-xl'> ${book.price} </p>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                            View
                        </button>
                    </div>

                </NavLink>

            </li>

        ))}

    </>)
}
