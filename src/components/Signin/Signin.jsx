import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setCustomer } from "../../store/features/books/slice";

import { NavLink, useNavigate } from "react-router-dom";

import avatar from '../../images/avatar.png';
import SigninForm from '../SigninForm/SigninForm';


export default function Signin() {

    const [username, setUsername] = useState(localStorage.getItem('username'));

    const { customer } = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCustomer(username));
        localStorage.setItem('username', username);
        navigate("/books");
    }

    const handleNavigate = () => {
        navigate("/books");
    }


    useEffect(() => {
        if (username && username.length > 0 && username !== null) {
            dispatch(setCustomer(username));
        }
    }, [])


    return (
        <div className='flex flex-col items-center justify-center min-h-screen my-4'>
            <img src={avatar} className='w-50 h-50 rounded-full shadow-md mb-3' />
            {customer.length ?
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl font-semibold text-gray-500'> Hello, {customer}! </p>
                    <button className="bg-white hover:bg-gray-100 text-stone-600 text-sm py-1 px-2 mt-4 border border-gray-400 rounded shadow"
                        onClick={handleNavigate}
                    >
                        Go to Books
                    </button>
                </div>
                : <SigninForm changeAction={handleChange} submitAction={handleSubmit} defaultValue={customer} />
            }
        </div>
    )
}
