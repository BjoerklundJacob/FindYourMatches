import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./Login"
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import AuthenticatedRoute from './AuthenticatedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoute><div>Hello world!</div></AuthenticatedRoute>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
