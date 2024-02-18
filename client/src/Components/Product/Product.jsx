import React, { useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import "./Product.css";

const Product = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/products/all-product")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="product">
        <div className="product-img">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70&crop=false"
            alt=""
          />
          <CiHeart className="product-wishlist" />
        </div>
        <div className="product-info">
          <h3>BRAND</h3>
          <p>Product Name</p>
          <div className="price">
            <span className="discounted-price">₹4999</span>{" "}
            <span className="original-price">₹6999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
