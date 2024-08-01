// import { Modal } from 'bootstrap';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  //   Handle Tab Change
  const handleTabChange = tabId => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
        centerd
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3 ">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === "visa"
                        ? "active"
                        : ""}`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "tab"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    />{" "}
                    <img
                      src="https://imgur.com/sB4jftM.png"
                      alt=""
                      width="80"
                    />
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === "visa"
                        ? "active"
                        : ""}`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "tab"}
                      onClick={() => handleTabChange("visa")}
                      href="#paypal"
                    />{" "}
                    <img
                      src="https://imgur.com/yK7EDD1.png"
                      alt=""
                      width="80"
                    />
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content" id="myTabContent">
                    {/* Visa content */}

                        {/* PayPal Content */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
