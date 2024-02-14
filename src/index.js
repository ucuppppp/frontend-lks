import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorPage from './pages/404'
import ProductsPage from './pages/products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex justify-center min-h-screen items-center'>HEllo BRuhh</div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/login',
    element: <div className='flex justify-center min-h-screen items-center'><LoginPage /></div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/register',
    element: <div className='flex justify-center min-h-screen items-center'><RegisterPage /></div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/products',
    element: <ProductsPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

