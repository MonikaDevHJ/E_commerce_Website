import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "Energistic an delivery atractica metrus after avsionary Apropria trnsition enterpris an sources application emerging  psd template";

const ProductDisplay = ({ item }) => {
  console.log(item);

  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleDecreses = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncereses = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  this one is for when i click On Cart Place I got a Data Here
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: quantity,
      size: size,
      color: color,
      coupon: coupon
    };

    // console.log(product);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setQuantity(1);
    setSize("Select Size");
    setColor("selector color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount}review </span>
        </p>
        <h4> ${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart component */}
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>lG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          <div className="select-product size">
            <select value={color} onChange={handleChangeColor}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Cart Plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecreses}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncereses}>
              +
            </div>
          </div>

          {/* coupon Feild */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code "
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/* Button Section */}
          <button type="submit" className="lab-btn">
            <span>Add To Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
