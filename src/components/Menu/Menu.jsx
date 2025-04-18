import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Menu() {

  const { customer } = useSelector((state) => state.books);

  return (<div className='pl-8'>

    {customer.length ?
      <p className='text-lg text-gray-400 hover:text-blue-600 hover:underline'>
        Books
      </p>
      : <p className='text-lg text-gray-400'> Books </p>
    }

  </div>)
}
