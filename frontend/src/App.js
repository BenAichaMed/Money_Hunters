import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import Sidebar from "./components/layout/Sidebar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

function AppContent() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <RouteBasedLayout />
    </div>
  );
}

function RouteBasedLayout() {
  return (
    <>
      <ConditionalSidebar />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <PrivateRoute>
                <CoursesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </>
  );
}

function ConditionalSidebar() {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/signup"];

  if (hideSidebarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Sidebar />;
}

export default App;
