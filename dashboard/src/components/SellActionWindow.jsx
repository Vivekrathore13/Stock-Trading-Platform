import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    if (stockPrice <= 0) {
      setMessage("Please enter a valid price");
      return;
    }
    if (stockQuantity <= 0) {
      setMessage("Please enter a valid quantity");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:3002/sellOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      }, {
        withCredentials: true
      });

      setMessage("Sell order placed successfully!");
      setTimeout(() => {
        generalContext.closeSellWindow();
      }, 2000);
    } catch (error) {
      console.error("Error placing sell order:", error);
      if (error.response?.status === 401) {
        setMessage("Please login to place orders. Redirecting...");
        setTimeout(() => {
          window.location.href = 'http://localhost:3004/login';
        }, 3000);
      } else {
        setMessage(error.response?.data?.error || "Failed to place sell order. Please try again.");
        // Error messages persist until user takes action - no auto-dismiss
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0.05"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        {message && (
          <div style={{ 
            padding: "8px", 
            margin: "8px 0", 
            borderRadius: "4px", 
            backgroundColor: message.includes("success") ? "#d4edda" : "#f8d7da",
            color: message.includes("success") ? "#155724" : "#721c24",
            border: `1px solid ${message.includes("success") ? "#c3e6cb" : "#f5c6cb"}`
          }}>
            {message}
          </div>
        )}
        <div>
          <Link 
            className={`btn btn-red ${isLoading ? 'disabled' : ''}`} 
            onClick={isLoading ? null : handleSellClick}
            style={{ opacity: isLoading ? 0.6 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
          >
            {isLoading ? "Placing..." : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
