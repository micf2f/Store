import React from 'react';

import Filter from '../Filter/Filter';
import Search from '../Search/Search';


export default function ToolBar() {
  return (
    <div className='mx-4 mt-4 py-2 flex items-center'>
        <Search />
        <Filter />
    </div>
  )
}
