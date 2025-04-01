import React from 'react';

import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';


export default function Header() {
    return (<div className='shadow-sm px-20 py-4 flex justify-between items-center'>
        <Logo />
        <Navigation />
    </div>)
}
