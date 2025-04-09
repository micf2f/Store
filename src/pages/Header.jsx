import React from 'react';

import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import Navigation from '../components/Navigation/Navigation';


export default function Header() {
    return (<div className='shadow-sm px-20 py-4 flex justify-between items-center'>
        <div className='flex justify-between items-center'>
            <Logo />
            <Menu />
        </div>

        <Navigation />
    </div>)
}
