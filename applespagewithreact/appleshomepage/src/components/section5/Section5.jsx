import React from 'react'
import servant from "../../images/icons/servant-logo.png"
import appletv from "../../images/icons/apple-tv-logo.png";

function Section5() {
  return (
    <div className="section5">
      <div className="section5-left">
        <div className="section5-left-logo">
          <div className="sec5-left-logo">
            <img src={appletv} alt="Tv" />
          </div>
        </div>
        <div className="servant-logo">
          <img
            src={servant}
            alt="servant-logo"
          />
        </div>
        <div className="watch-tv">
          <a href="#">Watch the trailer</a>
        </div>
      </div>
      <div className="section5-right">
        <div className="section5-right-title">AirPods Pro</div>
        <div className="description">Magic like you’ve never heard.</div>
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

export default Section5