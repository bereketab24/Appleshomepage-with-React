import React from 'react'
import proimg1 from "../../images/home/mac-laptop.jpg";

function Section1() {
  return (
    <div className="section1">
      <div className="model">16-inch model</div>
      <div className="product-title">MacBook Pro</div>
      <div className="marketing">The best for the brightest.</div>
      <div className="buy-learn-links">
        <ul>
          <li className="learn-link">
            <a href="#">Learn more</a>
          </li>
          <li className="buy-link">
            <a href="#">Buy</a>
          </li>
        </ul>
      </div>
      <div className="product-image">
        <img src={proimg1} alt="product-image" />
      </div>
    </div>
  );
}

export default Section1