import { configureStore } from '@reduxjs/toolkit';

import booksReducer from '../store/features/books/slice';


export const store = configureStore({
    reducer: {
        books: booksReducer
    },
})
