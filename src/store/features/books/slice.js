import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  books: [],
  book: {},
  customer: '',
  cart: {
    books: [],
    items: 0,
    totalPrice: 0
  }
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCustomer: (state, {payload}) => {
      state.customer = payload
    },
    removeCustomer: (state) => {
      state.customer = ''
    },
    setBooks: (state, {payload}) => {
      state.books = payload
    },
    setBook: (state, {payload}) => {
      state.book = payload
    },
    setCartItems: (state, {payload}) => {
      state.cart.books = [...state.cart.books, payload];
      state.cart.items = state.cart.books.reduce((sum, book) => sum + book.count, 0);
      state.cart.totalPrice = state.cart.books.reduce((sum, book) => sum + book.totalPrice, 0);

      localStorage.setItem('cartBooks', JSON.stringify(state.cart.books));
    },
    removeCart: (state) => {
      state.cart = {
        books: [],
        items: 0,
        totalPrice: 0
      }
    }
  },
})


export const { setCustomer, removeCustomer, setBooks, setBook, setCartItems, removeCart } = booksSlice.actions

export default booksSlice.reducer;