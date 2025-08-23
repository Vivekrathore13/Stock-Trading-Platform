import React from "react";

import Menu from "./Menu";
import { useAuth } from "./AuthContext";

const TopBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="topbar-container">
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

      <Menu />
    </div>
  );
};

export default TopBar;