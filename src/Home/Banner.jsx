import React, { useState } from "react";
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCatagory  from "../components/SelectedCatagory"

const title = (
  <h2>
    Search your One from <span>Thousand</span> Of Product
  </h2>
);
const desc = "we have the largest collection of Product";
const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" }
];

const Banner = () => {
  const [searchInput, setSearchinput] = useState("");
  const [filteredProducts, setFilterProducts] = useState(productData);
  // console.log(productData);

  // Search Functionality
  const handleSearch = (e) => {
    // console.log(e.target.value)
    const searchTerm = e.target.value;
    setSearchinput(searchTerm);

    //  Filetering the product based on the search
    const filtered = productData.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    setFilterProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
          <SelectedCatagory select={"all"}/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your Procuct"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
            <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
