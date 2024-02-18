import React from "react";
import "./Hero.css";
import heroImg from "../Assets/hero-3.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-left-content">
          <p>new <br /> products <br /> for everyone</p>
        </div>
        <button>Latest Products</button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
