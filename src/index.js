import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider}  from 'react-router-dom'

import AppPrivate from './private/App';
import AppPublic from './public/App';
import EmployeeAuth from './private/page/auth/EmployeeAuth';
import ManagerHome from './private/page/home/Home';

const router = createBrowserRouter([
  {
    path: '/manager',
    element: <AppPrivate />,
    children: [
      {path:'/manager/', element: <ManagerHome />},
      {path:'/manager/auth', element: <EmployeeAuth />}
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
