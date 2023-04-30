import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import HomeLayout from './component/Layout/HomeLayout';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import CartProductsLoader from './Loader/CartProductsLoader';
import CheckOut from './component/CheckOut/CheckOut';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './component/Provider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter ([
  {
    path : '/',
    element : <HomeLayout></HomeLayout>,
    children : [
      {
        path : '/',
        element : <Shop></Shop>
      },
      {
        path : '/order',
        element : <Orders></Orders>,
        loader : CartProductsLoader
        
      },
      {
        path : '/inventory',
        element : <Inventory></Inventory>
      },
      {
        path :'/login',
        element : <Login></Login>
      },
      {
        path : "/checkout",
        element : <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      },
      {
        path :'/signup',
        element : <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
