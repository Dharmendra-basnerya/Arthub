import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home.jsx'
import Signup from './components/Signup.jsx'

import {createBrowserRouter,
  RouterProvider,
Router,
Link,
} from 'react-router-dom';
import Login from './components/Login.jsx'
import AddProduct from './components/AddProduct.jsx'
import Logout from './components/Logout.jsx'


const  router = createBrowserRouter([
  {
    path:'/',
    element:(<Home/>),
  },
  {
    path:'Login',
    element:(<Login/>),
  },
  {
    path:'Signup',
    element:(<Signup/>),
  },
  {
    path:'add-product',
    element:(<AddProduct/>),
  },
  {
    path:'Logout',
    element:(<Logout/>),
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router}/>
)
