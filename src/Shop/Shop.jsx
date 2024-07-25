import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResult = "Showing 01-02 of 139 Results"
import Data from "../products.json"
import ProductsCard from './ProductsCard'
import Paginations from './Pagination'

const Shop= () => {

 const [GridList, setGridList] = useState(true);
 const [products , setProducts] = useState(Data);

//  Pagintaion



  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"/>
      {/* Shop Page  */}
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
               <div className='col-lg-8 col-12'>
                <article>
                  {/* layout and title here */}
                  <div className='shop-title d-flex flex-wrap justify-content-between'>
                    <p> {showResult} </p>
                    <div className={`product-view-mode ${GridList ? "gridActive" : " listActive"}`}>
                      <a className='grid' onClick={()=>setGridList(!GridList)}>
                        <i className='icofont-ghost'></i>
                      </a>
                      <a className='list' onClick={()=>setGridList(!GridList)}>
                        <i className='icofont-listine-dots'></i>
                      </a>


                    </div>

                  </div>

                  <div className=''>
                    <ProductsCard  GridList={GridList} products={products}/>
                  </div>
                
               <Paginations/>
                </article>
               </div>

               <div className='col-lg-4 col-12'>
                     Right Side
               </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Shop
