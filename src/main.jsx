// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import About from './About/About.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import SinleBlog from './blog/SinleBlog.jsx';
import ContactPage from './ContactPage/ContactPage.jsx';

// Import AuthProvider
import AuthProvider from './Contexts/AuthProivder'; // Ensure this path is correct
import PrivateRoute from "./PrivateRoutes/PrivateRoutes.jsx"
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SinleBlog />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'shop/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart-page',
        element: <PrivateRoute><CartPage /></PrivateRoute>, // Protected route
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path : "login",
    element : <Login/>
  },
  {
    path : "sign-up",
    element : <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
