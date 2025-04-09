import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../store/features/books/slice";

import service from '../services/items';

import ItemView from "../components/ItemView/ItemView";


export default function ItemRoute() {

  const { bookId } = useParams();

  const { book } = useSelector(state => state.books);
  const dispatch = useDispatch();


  const getBook = async () => {
    const response = await service.get(bookId);
    dispatch(setBook(response));
  }

  useEffect(() => {
    getBook();
  }, [])


  return (<div className="min-h-screen">

    {Object.keys(book).length ? <ItemView /> : null}

  </div>)

}
