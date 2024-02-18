import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(
        `http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`
      )
      .then(() => {
        alert("Login Successfull");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message)
      });
  };

  return (
    <div className="login">
      <form className="login-container">
        <h1>Welcome Back</h1>
        <div className="login-field">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleLogin}>Log In</button>
        <p>
          Don't have a account{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
