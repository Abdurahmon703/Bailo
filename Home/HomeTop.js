import React from "react";
import "./Home.css";
import img_url from "./watchIcon.png";
export default function HomeTop() {
  return (
    <div className="home-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Best Fashionable Smart Watch Your Daily Life</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button>
              <i class="fa fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="col-md-6">
            <img src={img_url} alt="watch" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
