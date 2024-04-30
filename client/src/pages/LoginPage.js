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
      const response = await axios.get("http://localhost:8001/user/get", {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.data && response.data.loggedIn) {
        alert("Login successful! Redirect to profile or dashboard.");
        window.location.href = "/"; 
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

// import "../App.css"
// export default function LoginPage(){
//     return(
//         <div class="page">
//         <form method="POST" class="formLogin">
//             <h1>Login</h1>
//             <p>Enter your access details in the field below.</p>
//             <label for="email">E-mail</label>
//             <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
//             <label for="password">Password</label>
//             <input type="password" placeholder="Digite seu e-mail" />
//             <a href="/">Esqueci minha senha</a>
//             <input type="submit" value="Acessar" class="btn" />
//         </form>
//     </div>
//     );
// }

