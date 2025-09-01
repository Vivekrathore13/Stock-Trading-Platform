import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTheme } from '../contexts/ThemeContext';
import { useWatchlist } from '../contexts/WatchlistContext';
import { PortfolioChart, AssetAllocationChart, StockPriceChart, ProfitLossChart } from './Charts';
import { SkeletonText, SkeletonChart, Spinner, LoadingOverlay } from './LoadingComponents';

const FeatureDemo = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { addToWatchlist, availableStocks } = useWatchlist();
  const [loading, setLoading] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(false);

  // Sample data for charts
  const samplePortfolioData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [100000, 105000, 98000, 112000, 118000, 125000]
  };

  const sampleAssetData = {
    labels: ['Stocks', 'Mutual Funds', 'Bonds', 'Cash'],
    values: [60, 25, 10, 5]
  };

  const sampleStockData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    values: [2450, 2480, 2420, 2510, 2535]
  };

  const sampleProfitLossData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    values: [1200, -800, 2100, 1500]
  };

  const handleToastDemo = (type) => {
    switch (type) {
      case 'success':
        toast.success('🎉 Success! Feature working perfectly!');
        break;
      case 'error':
        toast.error('❌ Error notification demo');
        break;
      case 'warning':
        toast.warning('⚠️ Warning notification demo');
        break;
      case 'info':
        toast.info('ℹ️ Info notification demo');
        break;
      default:
        toast('📢 Default notification demo');
    }
  };

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const handleSkeletonDemo = () => {
    setShowSkeletons(true);
    setTimeout(() => setShowSkeletons(false), 3000);
  };

  const handleWatchlistDemo = () => {
    const randomStock = availableStocks[Math.floor(Math.random() * availableStocks.length)];
    addToWatchlist(randomStock);
  };

  return (
    <div className="feature-demo" style={{ padding: '20px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>
          🚀 Feature Demo Dashboard
        </h2>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={toggleTheme}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      {/* Theme Demo Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>
                🎨 Theme System Demo
              </h5>
            </div>
            <div className="card-body">
              <p style={{ color: 'var(--text-secondary)' }}>
                Current theme: <strong style={{ color: 'var(--text-primary)' }}>{theme}</strong>
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Theme persists across page reloads and is synchronized between frontend and dashboard.
              </p>
              <button 
                className="btn btn-primary"
                onClick={toggleTheme}
              >
                Toggle Theme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications Demo */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>
                🔔 Toast Notifications Demo
              </h5>
            </div>
            <div className="card-body">
              <p style={{ color: 'var(--text-secondary)' }}>
                Click the buttons below to see different types of notifications:
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <button 
                  className="btn btn-success btn-sm"
                  onClick={() => handleToastDemo('success')}
                >
                  Success Toast
                </button>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleToastDemo('error')}
                >
                  Error Toast
                </button>
                <button 
                  className="btn btn-warning btn-sm"
                  onClick={() => handleToastDemo('warning')}
                >
                  Warning Toast
                </button>
                <button 
                  className="btn btn-info btn-sm"
                  onClick={() => handleToastDemo('info')}
                >
                  Info Toast
                </button>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleWatchlistDemo()}
                >
                  Add Random Stock to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading States Demo */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>
                ⏳ Loading Overlay Demo
              </h5>
            </div>
            <LoadingOverlay isLoading={loading} message="Loading demo data...">
              <div className="card-body">
                <p style={{ color: 'var(--text-secondary)' }}>
                  This content will be overlaid with a loading spinner when the demo is active.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={handleLoadingDemo}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Start Loading Demo'}
                </button>
              </div>
            </LoadingOverlay>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>
                💀 Skeleton Loading Demo
              </h5>
            </div>
            <div className="card-body">
              {showSkeletons ? (
                <>
                  <SkeletonText lines={3} />
                  <SkeletonChart height={150} />
                </>
              ) : (
                <>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    This is the actual content that appears after loading.
                  </p>
                  <div style={{ height: '150px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Chart Content</span>
                  </div>
                </>
              )}
              <button 
                className="btn btn-primary mt-3"
                onClick={handleSkeletonDemo}
                disabled={showSkeletons}
              >
                {showSkeletons ? 'Loading...' : 'Show Skeleton Loading'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Demo */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <PortfolioChart data={samplePortfolioData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <AssetAllocationChart data={sampleAssetData} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <StockPriceChart data={sampleStockData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <ProfitLossChart data={sampleProfitLossData} />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Summary */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>
                ✅ Implemented Features Summary
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6 style={{ color: 'var(--text-primary)' }}>UI/UX Improvements:</h6>
                  <ul style={{ color: 'var(--text-secondary)' }}>
                    <li>✅ Dark/Light Theme Toggle</li>
                    <li>✅ Responsive Design with Mobile Menu</li>
                    <li>✅ Skeleton Loading & Spinners</li>
                    <li>✅ Toast Notifications</li>
                    <li>✅ Loading Overlays</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 style={{ color: 'var(--text-primary)' }}>Dashboard Features:</h6>
                  <ul style={{ color: 'var(--text-secondary)' }}>
                    <li>✅ Interactive Charts (Chart.js)</li>
                    <li>✅ Enhanced Watchlist with Search</li>
                    <li>✅ Portfolio Analytics</li>
                    <li>✅ LocalStorage Persistence</li>
                    <li>✅ Real-time Data Updates</li>
                  </ul>
                </div>
              </div>
              <hr style={{ borderColor: 'var(--border-color)' }} />
              <div className="text-center">
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                  🎉 All features are fully functional and ready for production use!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDemo;
