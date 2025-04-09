import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setCustomer } from "../../store/features/books/slice";

import { useNavigate } from "react-router-dom";

import avatar from '../../images/avatar.png';


export default function SigninForm() {

  const [username, setUsername] = useState(localStorage.getItem('username'));

  const { customer } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleChange = () => {
    setUsername(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCustomer(username));
    localStorage.setItem('username', username);
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
      <form className='flex flex-col items-center justify-center'>
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          defaultValue={customer}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-70"
          onClick={handleSubmit}>
          Sign-In
        </button>
      </form>
    </div>
  )
}
