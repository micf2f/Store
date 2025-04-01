import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from '../../store/features/books/slice';

import service from '../../services/items';

import Item from './Item';


export default function ItemsList() {

    const { books } = useSelector((state) => state.books)

    const dispatch = useDispatch();


    const getBooks = async () => {
        const response = await service.get();
        dispatch(setBooks(response));
    }

    useEffect(() => {
        getBooks();
    }, [])


    return (

        <ul className="flex flex-wrap">
            {books.length ? <Item books={books} /> : null}
        </ul>

    )
}
