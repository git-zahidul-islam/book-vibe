import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx'
import PageToRead from './Pages/PageToRead/PageToRead.jsx'
import Root from './Pages/Root/Root.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {

    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/data.json'),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
