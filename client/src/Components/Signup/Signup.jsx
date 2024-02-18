import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [age, setAge] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    let payload = { name, email, phone, age, password };
    axios
      .post("http://localhost:8080/users/", payload)
      .then((response) => {
        console.log(response.data.data);
        alert("Registration Successfull");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div className="signup">
      <form className="signup-container">
        <h1>Register Here</h1>
        <div className="signup-field">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter Your Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Log In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
