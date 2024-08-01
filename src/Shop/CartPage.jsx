import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    // fetch cart Item from local Storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);

  // calculate prices
  const calculateTotalPrice = item => {
    return item.price * item.quantity;
  };

  // handle quantity increses
  const handleIncreses = item => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // update local storage With new Cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity Decreses
  const handleDecreses = item => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      // update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // handle Remove Item
  const handleRemoveItem = item => {
    const updatedCart = cartItems.filter(cartItems => cartItems.id !== item.id);
    // Update New Cart
    setcartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = cart => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //   cart SubTotall
  const cartSubtotoal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order Total
  const ordertotal = cartSubtotoal;

  return (
    <div>
      <PageHeader title={"short Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart Top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                {/* table Body */}
                <tbody>
                  {cartItems.map((item, indx) =>
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            {" "}<img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">
                            {item.name}
                          </Link>
                        </div>
                      </td>

                      <td className="cat-price">
                        ${item.price}
                      </td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecreses(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncreses(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>

                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ...............Cart top ends............ */}
            {/* cart bottom */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    name="coupon"
                    id="coupon"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value=" Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/* checkot Box End */}

              {/* Shopping Box */}
              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom(UK)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakistan</option>
                          <option value="IN">India</option>
                          <option value="NL">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                          </span>
                      </div>

                      <div className="outline-select shipping-select">
                      <select>
                          <option value="uk">New York</option>
                          <option value="bd">Delhi</option>
                          <option value="pak">Hassn</option>
                          <option value="IN">India</option>
                          <option value="NL">Karnatal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                          </span>

                      </div>
                      <input type="text" name="postalCode" id="postalCode" placeholder="Postalcode/ZIP *" className="cart-page-input-text" />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Total</h3>
                      <ul className="lab-ul">
                      <li>
                        <span className="pull-left">Cart Subtottoal</span>
                        <p className="pull-right">${cartSubtotoal}</p>
                      </li>
                      <li>
                        <span className="pull-left">Shipping  and Handling</span>
                        <p className="pull-right">Free Shipping</p>
                      </li>
                      <li>
                        <span className="pull-left">Order Total</span>
                        <p className="pull-right">${ordertotal.toFixed(2)}</p>
                      </li>

                      </ul>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
