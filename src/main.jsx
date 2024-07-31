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
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import About from "./About/About.jsx"
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'shop/:id',
        element: <SingleProduct/>
      },
      {
        path: 'cart-page',
        element: <CartPage/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
