import React from 'react'
import watchs from "../../images/icons/watch-series5-logo.png";
import applec from "../../images/icons/apple-card-logo.png";

function Section4() {
  return (
    <div className="section4">
      <div className="section4-left">
        <div className="section4-left-logo">
          <div className="sec4-left-logo">
            <img
              src={watchs}
              alt="watch"
            />
          </div>
        </div>
        <div className="description">
          With the new Always-On Retina display. You’ve never seen a watch like
          this.
        </div>
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
      <div className="section4-right">
        <div className="section4-right-logo">
          <img src={applec} alt="Card" />
        </div>
        <div className="description">
          Get 3% Daily Cash on purchases from Apple using Apple Card.
        </div>
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

export default Section4