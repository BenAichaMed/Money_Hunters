import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import Sidebar from "./components/layout/Sidebar";
import { loginUser } from "./services/apiLogin";

function App() {
  const login = async (email, password) => {
    const res = await loginUser(email, password);
    console.log(res);
  };

  const signup = (userData) => {
    console.log("Signup:", userData); // Placeholder for API call
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/login" element={<Login onLogin={login} />} />
              <Route path="/register" element={<Signup />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
