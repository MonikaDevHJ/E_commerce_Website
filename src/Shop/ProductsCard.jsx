// src/components/ProductsCard.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rattings from '../components/Rattings';
import { AuthContext } from '../Contexts/AuthProivder'; // Ensure correct path

const ProductsCard = ({ GridList, products }) => {
  const { user } = useContext(AuthContext); // Get the user from AuthContext
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleProductClick = (event, productId) => {
    event.preventDefault(); // Prevent default link behavior
    
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
    } else {
      navigate(`/shop/${productId}`); // Navigate to product details page if authenticated
    }
  };

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {
        products.map((product, i) => (
          <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
              {/* Product images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img 
                    src={product.img} 
                    alt="" 
                    onClick={(event) => handleProductClick(event, product.id)} // Handle image click
                    style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickable
                  />
                </div>
                {/* Product Action Link */}
                <div className='product-action-link'>
                  <a href="#" onClick={(event) => handleProductClick(event, product.id)}><i className='icofont-eye'></i> </a>
                  <a href="#"><i className='icofont-heart'></i></a>
                  <Link to="/cart-page"><i className='icofont-cart-alt'></i> </Link>
                </div>
              </div>

              {/* Product content */}
              <div className='product-content'>
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className='productRating'>
                  <Rattings />
                </p>
                <h6>${product.price}</h6>
              </div>
            </div>

            {/* List Item */}
            <div className='product-list-item'>
              {/* Product images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img 
                    src={product.img} 
                    alt="" 
                    onClick={(event) => handleProductClick(event, product.id)} // Handle image click
                    style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickable
                  />
                </div>
                {/* Product Action Link */}
                <div className='product-action-link'>
                  <a href="#" onClick={(event) => handleProductClick(event, product.id)}><i className='icofont-eye'></i> </a>
                  <a href="#"><i className='icofont-heart'></i></a>
                  <Link to="/cart-page"><i className='icofont-cart-alt'></i> </Link>
                </div>
              </div>

              {/* Product content */}
              <div className='product-content'>
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className='productRating'>
                  <Rattings />
                </p>
                <h6>${product.price}</h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductsCard;
