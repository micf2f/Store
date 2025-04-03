import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchBooks } from '../../store/features/books/slice';


export default function Search() {

    const [searchParam, setSearchParam] = useState('');

    const dispatch = useDispatch();


    const handleSearch = (e) => {
        setSearchParam(e.target.value);
        dispatch(searchBooks(searchParam));
    }


    return (<>
        <input
            type='search'
            className="border border-gray-300 rounded-lg w-100 p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            placeholder='Search book by name'
        />
    </>)
    
}
