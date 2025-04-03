import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterBooks } from '../../store/features/books/slice.js';

import { FILTER_BY_PRICE, FILTER_ALL } from '../../constants/filter.js';


export default function Filter() {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState(FILTER_ALL);


    const handleFilter = (e) => {
        setFilter(e.target.value);
        dispatch(filterBooks(e.target.value));
    }


    return (
        <select 
            className="border border-gray-300 rounded-lg ml-4 p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            onChange={handleFilter}>
                {FILTER_BY_PRICE.map((item, index) => (
                    <option key={index} value={item.key} defaultValue={filter}>
                        {item.title}
                    </option>
                ))}
        </select>
    )
}
