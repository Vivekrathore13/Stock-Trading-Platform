import React, { useState, useEffect } from "react";
import { useWatchlist } from "../contexts/WatchlistContext";
import { toast } from 'react-toastify';
import { SkeletonText, SkeletonChart } from './LoadingComponents';

const EnhancedWatchList = () => {
  const {
    watchlist,
    availableStocks,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    searchStocks,
    clearWatchlist
  } = useWatchlist();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update search results when query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const results = searchStocks(searchQuery);
        setSearchResults(results);
        setShowSearchResults(true);
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
      setLoading(false);
    }
  }, [searchQuery, searchStocks]);

  const handleAddStock = (stock) => {
    addToWatchlist(stock);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const handleRemoveStock = (symbol) => {
    removeFromWatchlist(symbol);
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatChange = (change, changePercent) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)} (${sign}${changePercent.toFixed(2)}%)`;
  };

  return (
    <div className="watchlist-container" style={{ padding: '16px' }}>
      <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Watchlist</h3>
      
      <div className="search-container" style={{ position: 'relative', marginBottom: '16px' }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search stocks to add to watchlist..."
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}
        />
        <span 
          className="counts" 
          style={{ 
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            fontSize: '12px'
          }}
        >
          {watchlist.length} / 50
        </span>

        {/* Search Results Dropdown */}
        {showSearchResults && (
          <div
            className="search-results"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              maxHeight: '300px',
              overflowY: 'auto',
              zIndex: 1000,
              boxShadow: '0 4px 12px var(--shadow)',
              marginTop: '4px'
            }}
          >
            {loading ? (
              <div style={{ padding: '16px' }}>
                <SkeletonText lines={3} />
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.slice(0, 10).map((stock) => (
                <div
                  key={stock.symbol}
                  className="search-result-item"
                  onClick={() => handleAddStock(stock)}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-secondary)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '14px' }}>
                      {stock.symbol}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {stock.name}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 'bold' }}>
                      {formatPrice(stock.price)}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: stock.change >= 0 ? 'var(--profit-color)' : 'var(--loss-color)',
                        marginTop: '2px'
                      }}
                    >
                      {formatChange(stock.change, stock.changePercent)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No stocks found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Watchlist Actions */}
      {watchlist.length > 0 && (
        <div className="watchlist-actions" style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button
            onClick={clearWatchlist}
            className="btn btn-outline-danger btn-sm"
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              borderRadius: '6px'
            }}
          >
            Clear All
          </button>
        </div>
      )}

      {/* Watchlist Items */}
      <div className="watchlist-items">
        {watchlist.length === 0 ? (
          <div 
            style={{ 
              padding: '40px 20px', 
              textAlign: 'center', 
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px dashed var(--border-color)'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📈</div>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>No stocks in watchlist</h4>
            <p style={{ fontSize: '14px' }}>Search and add stocks above to start tracking them</p>
          </div>
        ) : (
          <div className="watchlist-grid" style={{ display: 'grid', gap: '8px' }}>
            {watchlist.map((stock) => (
              <div
                key={stock.symbol}
                className="watchlist-item"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px var(--shadow)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '16px' }}>
                    {stock.symbol}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {stock.name}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '16px' }}>
                    {formatPrice(stock.price)}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: stock.change >= 0 ? 'var(--profit-color)' : 'var(--loss-color)',
                      marginTop: '4px',
                      fontWeight: '500'
                    }}
                  >
                    {formatChange(stock.change, stock.changePercent)}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveStock(stock.symbol)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--danger)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--bg-secondary)';
                    e.target.style.color = 'var(--text-muted)';
                  }}
                  title="Remove from watchlist"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedWatchList;
