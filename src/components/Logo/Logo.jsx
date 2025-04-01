import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Logo() {

  const { customer } = useSelector((state) => state.books);

  return (<>

    {customer.length ?
      <NavLink to="/books">
        <h1 className='text-2xl font-semibold'> X-Store </h1>
      </NavLink>
      : <h1 className='text-2xl font-semibold'> X-Store </h1>}

  </>)
}
