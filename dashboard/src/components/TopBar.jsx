import React from "react";

import Menu from "./Menu";
import { useAuth } from "./AuthContext";
import { useResponsive } from "../contexts/ResponsiveContext";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  const { user, logout } = useAuth();
  const { isMobile, toggleSidebar } = useResponsive();

  return (
    <div className="topbar-container">
      {/* Mobile menu toggle */}
      {isMobile && (
        <button
          className="mobile-menu-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span className="hamburger-icon">☰</span>
        </button>
      )}

      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div className="user-info">
        <div className="d-flex align-items-center gap-3">
          <ThemeToggle />
          {user && (
            <div className="d-flex align-items-center">
              <span className="me-3">Welcome, {user.name}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;