import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://projeto-final-m5-15w5.onrender.com/login", {
        email,
        password
      });

      if (response.data && response.status === 200){
        localStorage.setItem("token", response.data.token);

        window.location.replace("/");
      } else {
        setLoginError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Error during login. Please try again later.");
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="formLogin">
        <h1>Login</h1>
        <p>Enter your access details in the field below.</p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Enter your email"
          autoFocus={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/">Forgot password?</a>
        <input type="submit" value="Login" className="btn" />
        {loginError && <p className="error">{loginError}</p>}
      </form>
    </div>
  );
}
