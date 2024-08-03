import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Modal.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // Handle Tab Change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // direct To Home Page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("your Order is Placed Successfully! ");

    // When Order Is Placed We Do Not need store order In locally Place
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalcard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3 ">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="https://imgur.com/sB4jftM.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="https://imgur.com/yK7EDD1.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content" id="myTabContent">
                  {/* Visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa Tab Content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center" />
                      <h5>Credit Card </h5>

                      <div className="inputbox">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                        />
                        <span>CardHolder Name</span>
                      </div>

                      <div className="inputbox">
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          className="form-control"
                          min="1"
                          max="999"
                          required
                        />
                        <span>Card Number</span>
                        <i className="fa fa-eye" />
                      </div>

                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="expiry"
                            id="expiry"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Expire Date</span>
                        </div>

                        <div className="inputbox">
                          <input
                            type="text"
                            name="cvv"
                            id="cvv"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>CVV</span>
                        </div>
                      </div>

                      <div className="px-5 pay">
                        <button
                          className="btn btn-success btn-block"
                          onClick={handleOrderConfirm}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* PayPal Content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    {/* PayPal Tab Content */}

                    <div className="mt-4 mx-4">
                      <div className="text-center" />
                      <h5>PayPol Accountinfo </h5>

                      <div className="inputbox">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                        />
                        <span>Enter Your Email </span>
                      </div>

                      <div className="inputbox">
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          className="form-control"
                          min="1"
                          max="999"
                          required
                        />
                        <span>Your Name</span>
                      </div>

                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            className="form-control"
                            min="1"
                            max="999"
                            required
                          />
                          <span>Extra Info</span>
                        </div>

                        <div className="inputbox">
                          <input
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            className="form-control"
                            min="1"
                            max="999"
                            required
                          />
                          <span></span>
                        </div>
                      </div>

                      <div className="px-5 pay">
                        <button
                          className="btn btn-success btn-block"
                          onClick={handleOrderConfirm}
                        >
                          Add PayPal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment descliamer */}
                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Discliar :</em> In no event shall payment or
                  Partial payment by Owner for any material or service{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
