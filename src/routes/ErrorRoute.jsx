import React from 'react';

import errorImg from '../images/error.png';


export default function ErrorRoute() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen my-4'>

      <img src={errorImg} className='opacity-25 w-80' />
      <p className='font-semibold text-gray-500 text-3xl pt-8'> Oops! Something went wrong... </p>

    </div>
  )
}
