import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/themes.css";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { WatchlistProvider } from "./contexts/WatchlistContext";
import ProtectedRoute from "./components/ProtectedRoute";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ResponsiveProvider>
        <WatchlistProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </WatchlistProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  </React.StrictMode>
);