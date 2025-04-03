import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  books: [],
  book: {},
  customer: '',
  cart: {
    books: [],
    items: 0,
    totalPrice: 0
  },
  filteredBooks: []
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCustomer: (state, { payload }) => {
      state.customer = payload
    },
    removeCustomer: (state) => {
      state.customer = ''
    },
    setBooks: (state, { payload }) => {
      state.books = payload
    },
    setBook: (state, { payload }) => {
      state.book = payload
    },
    setCartItems: (state, { payload }) => {
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
      };

      localStorage.removeItem('cartBooks');
    },
    filterBooks: (state, { payload }) => {
      switch (payload) {
        case 'FILTER_ALL':
          state.filteredBooks = state.books;
          break;
        case 'FILTER_LOW':
          state.filteredBooks = state.books.filter(item => item.price < 15);
          break;
        case 'FILTER_MEDIUM':
          state.filteredBooks = state.books.filter(item => item.price > 15 && item.price < 30);
          break;
        case 'FILTER_HIGH':
          state.filteredBooks = state.books.filter(item => item.price > 30);
          break;
        default:
          state.filteredBooks = state.books;
      }
    },
    searchBooks: (state, { payload }) => {
      if (payload) {
        state.filteredBooks = state.books.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()));
      } else {
        state.filteredBooks = state.books;
      }
    }
  },
})


export const { setCustomer, removeCustomer, setBooks, setBook, setCartItems, removeCart, filterBooks, searchBooks } = booksSlice.actions

export default booksSlice.reducer;