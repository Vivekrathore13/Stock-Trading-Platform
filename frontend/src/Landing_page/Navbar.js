import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ThemeToggle from "../components/ThemeToggle";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Configure axios to send cookies
  axios.defaults.withCredentials = true;

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3002/me');
        setIsLoggedIn(true);
        setUser(response.data.user);
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  // Logout function
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await axios.post('http://localhost:3002/logout');
      setIsLoggedIn(false);
      setUser(null);
      // Redirect to home page after logout
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout request fails, clear local state
      setIsLoggedIn(false);
      setUser(null);
      window.location.href = '/';
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="Media/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/products"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/support"}>
                  Support
                </Link>
              </li>

              {/* Theme Toggle */}
              <li className="nav-item d-flex align-items-center">
                <ThemeToggle className="ms-2" />
              </li>

              {/* Show different options based on login status */}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/signup"}>
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="http://localhost:3001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">Welcome, {user?.name}</span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      style={{ marginLeft: '10px' }}
                    >
                      {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </button>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;