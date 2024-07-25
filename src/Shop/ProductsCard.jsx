import React from 'react'
import { Link } from 'react-router-dom'
import Rattings from '../components/Rattings'

const ProductsCard = ({GridList,products}) => {
    console.log(products)
  return (
    <div className={`shop-product-wrap row justify-content-center  ${GridList ? "grid" : "list" }`}>
      {
        products.map((products,i)=>(
           <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
                {/* product images */}
                <div className='product-thumb'>
                        <div className='pro-thumb'>
                            <img src={products.img} alt="" />

                        </div>
                       {/* Product Action Link */}
                        <div className='product-action-link'>
                           <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i> </Link>
                           <a href="#"><i className='icofont-heart'></i></a>
                           <Link to="/cart-page"><i className='icofont-cart-alt'></i> </Link>
                        </div>
                </div> 

                 {/*Product content  */}
                 <div className='product-content'>
                    <h5>
                        <Link to={`/shop/${products.id}`}>{products.name}</Link>
                    </h5>
                    <p  className='productRating'>
                        <Rattings/>
                    </p>

                    <h6>${products.price}</h6>

                 </div>

            </div>

            {/* List Item */}

            <div className='product-list-item'>
                {/* product images */}
                <div className='product-thumb'>
                        <div className='pro-thumb'>
                            <img src={products.img} alt="" />

                        </div>
                       {/* Product Action Link */}
                        <div className='product-action-link'>
                           <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i> </Link>
                           <a href="#"><i className='icofont-heart'></i></a>
                           <Link to="/cart-page"><i className='icofont-cart-alt'></i> </Link>
                        </div>
                </div> 

                 {/*Product content  */}
                 <div className='product-content'>
                    <h5>
                        <Link to={`/shop/${products.id}`}>{products.name}</Link>
                    </h5>
                    <p  className='productRating'>
                        <Rattings/>
                    </p>

                    <h6>${products.price}</h6>

                 </div>

            </div>


           </div> 
        )
        )
      }
    </div>
  )
}

export default ProductsCard
