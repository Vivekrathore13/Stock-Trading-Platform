import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const WatchlistContext = createContext();

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

// Sample stock data - in real app, this would come from an API
const SAMPLE_STOCKS = [
  { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', price: 2456.75, change: 23.45, changePercent: 0.96 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3234.50, change: -45.20, changePercent: -1.38 },
  { symbol: 'INFY', name: 'Infosys Limited', price: 1456.30, change: 12.80, changePercent: 0.89 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: 1678.90, change: -8.45, changePercent: -0.50 },
  { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: 934.25, change: 15.60, changePercent: 1.70 },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel Limited', price: 789.45, change: 7.30, changePercent: 0.93 },
  { symbol: 'ITC', name: 'ITC Limited', price: 345.80, change: -2.15, changePercent: -0.62 },
  { symbol: 'SBIN', name: 'State Bank of India', price: 567.20, change: 8.90, changePercent: 1.59 },
  { symbol: 'LT', name: 'Larsen & Toubro Limited', price: 2134.75, change: 34.50, changePercent: 1.64 },
  { symbol: 'WIPRO', name: 'Wipro Limited', price: 456.30, change: -3.20, changePercent: -0.70 },
];

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [availableStocks] = useState(SAMPLE_STOCKS);
  const [loading, setLoading] = useState(false);

  // Load watchlist from localStorage on component mount
  useEffect(() => {
    const savedWatchlist = localStorage.getItem('zerodha-watchlist');
    if (savedWatchlist) {
      try {
        const parsed = JSON.parse(savedWatchlist);
        setWatchlist(parsed);
      } catch (error) {
        console.error('Error parsing watchlist from localStorage:', error);
        setWatchlist([]);
      }
    }
  }, []);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('zerodha-watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Add stock to watchlist
  const addToWatchlist = (stock) => {
    const isAlreadyInWatchlist = watchlist.some(item => item.symbol === stock.symbol);
    
    if (isAlreadyInWatchlist) {
      toast.warning(`${stock.symbol} is already in your watchlist`);
      return false;
    }

    const stockWithTimestamp = {
      ...stock,
      addedAt: new Date().toISOString(),
      id: Date.now() // Simple ID generation
    };

    setWatchlist(prev => [...prev, stockWithTimestamp]);
    toast.success(`${stock.symbol} added to watchlist`);
    return true;
  };

  // Remove stock from watchlist
  const removeFromWatchlist = (symbol) => {
    setWatchlist(prev => prev.filter(item => item.symbol !== symbol));
    toast.info(`${symbol} removed from watchlist`);
  };

  // Check if stock is in watchlist
  const isInWatchlist = (symbol) => {
    return watchlist.some(item => item.symbol === symbol);
  };

  // Get watchlist with updated prices (simulate real-time updates)
  const getWatchlistWithUpdatedPrices = () => {
    return watchlist.map(watchlistItem => {
      const currentStock = availableStocks.find(stock => stock.symbol === watchlistItem.symbol);
      if (currentStock) {
        // Simulate small price changes
        const priceChange = (Math.random() - 0.5) * 10; // Random change between -5 and +5
        const newPrice = Math.max(currentStock.price + priceChange, 1); // Ensure price doesn't go below 1
        const change = newPrice - currentStock.price;
        const changePercent = (change / currentStock.price) * 100;
        
        return {
          ...watchlistItem,
          price: parseFloat(newPrice.toFixed(2)),
          change: parseFloat(change.toFixed(2)),
          changePercent: parseFloat(changePercent.toFixed(2)),
          lastUpdated: new Date().toISOString()
        };
      }
      return watchlistItem;
    });
  };

  // Clear entire watchlist
  const clearWatchlist = () => {
    setWatchlist([]);
    toast.info('Watchlist cleared');
  };

  // Search stocks
  const searchStocks = (query) => {
    if (!query) return availableStocks;
    
    const lowercaseQuery = query.toLowerCase();
    return availableStocks.filter(stock => 
      stock.symbol.toLowerCase().includes(lowercaseQuery) ||
      stock.name.toLowerCase().includes(lowercaseQuery)
    );
  };

  // Get stock by symbol
  const getStockBySymbol = (symbol) => {
    return availableStocks.find(stock => stock.symbol === symbol);
  };

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (watchlist.length > 0) {
        setWatchlist(prev => getWatchlistWithUpdatedPrices());
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [watchlist.length]);

  const value = {
    watchlist,
    availableStocks,
    loading,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    clearWatchlist,
    searchStocks,
    getStockBySymbol,
    getWatchlistWithUpdatedPrices
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
