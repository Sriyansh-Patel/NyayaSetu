import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Provider} from 'react-redux';
import {store} from './app/store.js';

import {
  createBrowserRouter,
  RouterProvider
  } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

    const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/about",
      element: <div>About Us</div>
    },
    {
      path: "/contact",
      element: <div>Contact Us</div>
    },
    {
      path:"/hire",
      element: <div>Hire Us</div>
    },{
      path:"/login",
      element: <Login/>
    },{
      path:"/signup",
      element: <Signup/>
    },{
      path:"/work",
      element: <div>Our Work</div>
    }

  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
