import React from 'react'
import logo from "../../images/icons/logo.png"
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-content-wrapper">
        <div className="header-links-wrapper">
          <ul>
            <li className="apple-icon">
              <a href="index-mine.html">
                <img src={logo} alt="apple's logo" />
              </a>
            </li>
            <li>
              <a href="index-mine.html">Mac</a>
            </li>
            <li>
              <a href="index-mine.html">iPhone</a>
            </li>
            <li>
              <a href="index-mine.html">iPad</a>
            </li>
            <li>
              <a href="index-mine.html">Watch</a>
            </li>
            <li>
              <a href="index-mine.html">Tv</a>
            </li>
            <li>
              <a href="index-mine.html">Music</a>
            </li>
            <li>
              <a href="index-mine.html">Support</a>
            </li>
            <li className="search-icon">
              <a href="index-mine.html">
                <img
                  src={search}
                  alt="search icon"
                />
              </a>
            </li>
            <li className="cart-icon">
              <a href="index-mine.html">
                <img src={cart} alt="cart icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header