import React from 'react'
import ipad from "../../images/icons/new-ipad-logo.png";

function Section6() {
  return (
    <div className="section6">
      <div className="section6-left">
        <div className="sec6-model">16-inch model</div>
        <div className="sec6-title">MacBook Pro</div>
        <div className="description">The best for the brightest.</div>
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
      </div>
      <div className="section6-right">
        <div className="section6-right-logo">
          <img src={ipad} alt="ipad" />
        </div>
        <div className="description">Like a computer. Unlike any computer.</div>
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
      </div>
    </div>
  );
}

export default Section6