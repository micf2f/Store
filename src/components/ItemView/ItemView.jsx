import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../../store/features/books/slice";

import imageNotFound from '../../images/notFound.png';


export default function ItemView() {

    const [count, setCount] = useState(1);

    const { book } = useSelector(state => state.books);
    const dispatch = useDispatch();


    const handleCountChange = (e) => {
        setCount(+e.target.value);
    }

    const handleAddToCart = (e) => {
        e.preventDefault();

        if (count < 1 || count > 42) {
            return alert('Please, enter count between 1 and 42')
        }

        dispatch(setCartItems({
            name: book.title,
            count: count,
            totalPrice: count * book.price
        }));

    }


    return (<>

        <div className="flex my-6">
            <div className="flex flex-1 justify-center">
                {book.image.length ? <img src={book.image} className='w-60 h-80 mb-4' /> : <img src={imageNotFound} className='w-60 h-80 mb-4' />}
            </div>
            <div className="flex-1">
                <h2 className='font-semibold text-3xl mb-4'> {book.title} </h2>
                <p className="mb-2"> Author(s): {book.author} </p>
                <p className="mb-2"> Level: {book.level} </p>
                <p> Tags: {book.tags.join(', ')} </p>
            </div>
            <div className="flex-1">
                <div className="border p-4">
                    <p className="flex justify-between font-semibold mb-2">
                        <span> Price, $ </span>
                        <span> {book.price} </span>
                    </p>
                    <p className="flex justify-between items-center font-semibold mb-2">
                        <span> Count </span>
                        <span>
                            <input
                                type="number"
                                defaultValue={count}
                                min="1"
                                max="42"
                                className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleCountChange}
                            />
                        </span>
                    </p>
                    <p className="flex justify-between font-semibold mb-4">
                        <span> Total price, $ </span>
                        <span> {book.price * count} </span>
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                        onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        <div className="w-2/3 mb-6">
            <p> {book.description} </p>
        </div>

    </>)
}
