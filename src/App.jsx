import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./pages/Layout";
import ErrorRoute from "./routes/ErrorRoute";
import SigninRoute from "./routes/SigninRoute";
import ItemsListRoute from "./routes/ItemsListRoute";
import ItemRoute from "./routes/ItemRoute";
import CartRoute from "./routes/CartRoute";

import "./App.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/',
        element: <SigninRoute />
      },
      {
        path: '/books',
        element: <ItemsListRoute />
      },
      {
        path: '/books/:bookId',
        element: <ItemRoute />
      },
      {
        path: '/cart',
        element: <CartRoute />
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />
}


export default App;
