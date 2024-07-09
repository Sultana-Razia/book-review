import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Root/Home/Home';
import Root from './components/Root/Root';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishListBooks from './components/WishListBooks/WishListBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
            element: <WishListBooks></WishListBooks>
          }
        ]
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
