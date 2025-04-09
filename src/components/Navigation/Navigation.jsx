import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeCustomer, setCustomer } from "../../store/features/books/slice";

import cartImg from '../../images/cart.png';
import avatar from '../../images/avatar.png';


export default function Navigation() {

    const { cart, customer } = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(removeCustomer());
        localStorage.removeItem('username');
        navigate('/');
    };


    useEffect(() => {
        if (localStorage.getItem('username')) {
            dispatch(setCustomer(localStorage.getItem('username')));
        }
    }, [])


    return (
        <div className='flex items-center'>

            {customer.length ?
                <NavLink to="/cart">
                    <div className='flex items-center'>
                        <img src={cartImg} className="w-8 h-8 mx-2 opacity-50" />
                        <span className='pr-2 font-bold text-blue-500'> {cart.items > 0 ? cart.items : null} </span>
                    </div>
                </NavLink>
                : <img src={cartImg} className="w-8 h-8 mx-2 opacity-50" />}

            <NavLink to="/">
                <button
                    className="bg-white hover:bg-gray-100 text-stone-600 text-sm py-1 px-2 ml-2 border border-gray-400 rounded shadow"
                    onClick={handleSignOut}>
                    Sign-Out
                </button>
            </NavLink>

            <NavLink to="/">
                <div className='flex items-center mx-4'>
                    <img src={avatar} className="w-9 h-9 shadow-sm rounded-full mr-2" />
                    <p className='text-stone-400'>
                        {customer.length ? customer : 'username'}
                    </p>
                </div>
            </NavLink>

        </div>
    )
}
