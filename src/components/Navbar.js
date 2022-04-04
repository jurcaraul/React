import React from "react";
import Logo from "../spinning_logo_cut.png";
import MenuBtn from "./home_white_24dp.svg";
import ReserveBtn from "./edit_calendar_white_24dp.svg";
// import ShopBtn from "./shopping_bag_white_24dp.svg";
import ServBtn from "./local_offer_white_24dp.svg";

import ContactBtn from "./alternate_email_white_24dp.svg";

export default function Navbar() {
  window.onscroll = function () {
    shrinkLogo();
  };

  function shrinkLogo() {
    const logo = document.querySelector(".logo-navbar");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      logo.style.width = "4vw";
    } else {
      logo.style.width = "10vw";
    }
  }

  return (
    <nav className="nav-container">
      <a className="logo-a" href="#">
        <img className="logo-navbar" src={Logo} />
        <span className="logo-text">Spinning la Divici</span>
      </a>
      <ul className="links-el">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#">Shop</a>
        </li> */}
        <li>
          <a href="#">Reserve</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* <img className="menu-icon" src={Menu} /> */}
      <nav className="mobile-nav">
        <div className="mob-menu-btn">
          <a href="#"> 
            <img src={MenuBtn} />
            <span>Home</span>
          </a>
        </div>
        <div className="mob-menu-btn">
          <a href="#services">
            {" "}
            <img src={ServBtn} />
            <span>Services</span>
          </a>
        </div>
        <div className="mob-menu-btn">
          <a href="#">
            {" "}
            <img src={ReserveBtn} />
            <span>Reserve</span>
          </a>
        </div>
       
        <div className="mob-menu-btn">
          <a href="#">
            <img src={ContactBtn} />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </nav>
  );
}
