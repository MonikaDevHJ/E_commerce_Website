import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductsCard from './ProductsCard';
import Paginations from './Pagination';
import '../App.css'; // Adjust the path according to the actual location of styles.css
import Search from './Search';
import ShopCatgory from './ShopCatgory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

// filter Product besed on category

const[selectedCategory, setSelectedCategory] = useState("All");
const menuItems = [...new Set(Data.map((val) => val.category))];

const filterItem = (curcat) => {
  const newItem = Data.filter((newVal)=>{
    return newVal.category === curcat ;

  })
  setSelectedCategory(curcat);
  setProducts(newItem);
}

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* Shop Page */}
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                {/* Layout and title here */}
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p> Showing {indexOfFirstProduct + 1}-{indexOfLastProduct} of {products.length} Results </p>
                  <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                    <a className='grid' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductsCard GridList={GridList} products={currentProduct} />
                </div>

                <Paginations
                  productsPerPage={productsPerPage}
                  totaLProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className='col-lg-4 col-12'>
              <aside>
                 <Search products={products} GridList={GridList}/>
                 <ShopCatgory 
                 filterItem = {filterItem}
                 setItem = {setProducts}
                 menuItems = {menuItems}
                 setProducts = {setProducts}
                 selectedCategory = {selectedCategory}
                 />
                 <PopularPost/>
                 <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
