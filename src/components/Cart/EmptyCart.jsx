import React from 'react';

import cart from '../../images/cart.png';


export default function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen my-4'>
        <img src={cart} className='opacity-25 w-50' />
    </div>
  )
}
