import React from 'react';

import ItemsList from '../components/ItemsList/ItemsList';
import ToolBar from '../components/ToolBar/ToolBar';


export default function ItemsListRoute() {
  return (<div className='min-h-screen'>
    <ToolBar />
    <ItemsList />
  </div>)
}
