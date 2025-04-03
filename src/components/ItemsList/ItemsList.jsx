import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setBooks, filterBooks } from '../../store/features/books/slice';

import service from '../../services/items';

import Item from './Item';

import noResImg from '../../images/noResults.png';


export default function ItemsList() {

    const { filteredBooks } = useSelector((state) => state.books)
    const dispatch = useDispatch();


    const getBooks = async () => {
        const response = await service.get();
        dispatch(setBooks(response));
        dispatch(filterBooks(response));
    }


    useEffect(() => {
        getBooks();
    }, [])


    return (<>

        {filteredBooks.length ?
            <ul className="flex flex-wrap">
                <Item books={filteredBooks} />
            </ul>
            :
            <div className='flex flex-col items-center justify-center min-h-screen my-4'>
                <img src={noResImg} className='opacity-25 h-50' />
                <p className='font-semibold text-gray-500 text-3xl pt-8'> No results found... </p>
            </div>
        }

    </>)
}
