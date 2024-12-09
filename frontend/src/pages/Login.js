import React, { useContext, useState } from "react";
import "../styles/auth.css"; // Import the CSS file
import AuthContext from "../context/AuthContext";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    // Placeholder for API call
    //onLogin(email, password);
  };

  return (
    <div className="auth_page">
      <div className="auth-container">
        <h1>Login to Money Hunters</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
