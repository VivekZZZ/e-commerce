import React from "react";
import "./Homepage.css";
import Hero from "../Hero/Hero";
import Product from "../Product/Product";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Product />
    </div>
  );
};

export default Homepage;
