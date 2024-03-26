import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx'
import PageToRead from './Pages/PageToRead/PageToRead.jsx'
import Root from './Pages/Root/Root.jsx'

const router = createBrowserRouter([
  {

    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('data.json'),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
