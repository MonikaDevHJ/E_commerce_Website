import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../Contexts/AuthProivder";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // authinfo
  const {user} = useContext(AuthContext)
  console.log(user);

  // advent listener

  window.addEventListener("scroll", () => { 
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : " "
      }`}
    >
      {/* header Top Start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              {" "}
              <span>Create Account</span>{" "}
            </Link>
            <Link to="/login">Log In </Link>
          </div>
        </div>
      </div>
      {/* header Bottom  */}
      <div className="header-bottom ">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}

            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>

              </div>

              {/* Sign in or log in */}
               <Link to="/sign-up" className="lab-btn me-3 d-done d-md-block">Create Account</Link>
               <Link to="/Login" className=" d-done d-md-block">Log In</Link>

                 {/* Menu Toggler  when it is small screen */}
                 <div onClick ={  ()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none  ${menuToggle ? "active" :""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                 </div>

                 {/* scoial Toggler */}
                 <div className="ellepsis-bar d-md-none"
                 onClick={() => setSocialToggle(!socialToggle)}>
                 <i className="icofont-info-square"></i>
                 </div>

              

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
