import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCartItems } from '../store/features/books/slice';

import Header from './Header';
import Footer from '../components/Footer/Footer';


export default function Layout() {

    const dispatch = useDispatch();


    useEffect(() => {
        const selectedBooks = JSON.parse(localStorage.getItem('cartBooks'));
        if (selectedBooks) {
            selectedBooks.forEach(book => dispatch(setCartItems(book)));
        }
    }, [])


    return (<>
        <header> <Header /> </header>
        <main className='px-20'> <Outlet /> </main>
        <footer> <Footer /> </footer>
    </>)
}
