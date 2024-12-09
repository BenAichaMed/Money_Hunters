import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;
const API_URL = "http://127.0.0.1:8080/api/v1/users";

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")))
      : null
  );

  const navigate = useNavigate();
  let [userGroups, setUserGroups] = useState([]);

  let loginUser = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("I'm here");
      const data = response.data; // Access the parsed JSON data directly
      console.log(data);

      if (response.status === 200) {
        setAuthTokens(data.token);
        console.log(jwtDecode(data.token.id));
        setUser(jwtDecode(data.token.id));
        localStorage.setItem("authTokens", JSON.stringify(data.token));
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Error response:", error.response.data);
        alert(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error message:", error.message);
      }
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };
  async function registerUser({ username, password, email }) {
    try {
      const response = await axios.post(
        `${API_URL}/register`,
        { email, password, confirmPassword: password, name: username },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (data.status === 201) return navigate("/login");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Error response:", error.response.data);
        alert(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error message:", error.message);
      }
    }
  }

  const userBelongsToGroup = (groupName) => {
    return userGroups.includes(groupName);
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    userBelongsToGroup,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
