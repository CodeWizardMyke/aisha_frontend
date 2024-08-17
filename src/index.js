import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider}  from 'react-router-dom'

import AppPrivate from './private/App';
import AppPublic from './public/App';
import EmployeeAuth from './private/page/auth/EmployeeAuth';
import ManagerHome from './private/page/home/Home';
import ProductManager from './private/page/home/ProductManager';
import EmployeeManager from './private/page/home/EmployeeManager';
import CartManager from './private/page/home/CartManager';

const router = createBrowserRouter([
  {
    path: '/manager',
    element: <AppPrivate />,
    children: [
      {path:'/manager/', element: <ManagerHome />},
      {path:'/manager/auth', element: <EmployeeAuth />},
      {path:'/manager/product', element: <ProductManager/>},
      {path:'/manager/employee', element: <EmployeeManager/>},
      {path:'/manager/cart', element: <CartManager/>},
    ]
  },
  {
    path: '/',
    element: <AppPublic />,
    children: [
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
