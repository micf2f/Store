import React from 'react';
import { useSelector } from 'react-redux';

import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/Cart/EmptyCart';


export default function CartRoute() {

  const { cart } = useSelector(state => state.books);


  return (<>
    {cart.books.length ? <Cart /> : <EmptyCart />}
  </>)
}
