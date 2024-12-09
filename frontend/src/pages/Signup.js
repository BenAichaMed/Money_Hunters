import React, { useContext, useState } from "react";
import "../styles/auth.css";
import AuthContext from "../context/AuthContext";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder for API call
    registerUser({ username, password, email });
  };

  return (
    <div className="auth_page">
      <div className="auth-container">
        <h1>Join Money Hunters</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
