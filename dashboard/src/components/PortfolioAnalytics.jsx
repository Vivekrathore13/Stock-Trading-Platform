import React, { useState, useEffect } from 'react';
import { PortfolioChart, AssetAllocationChart, ProfitLossChart } from './Charts';
import { SkeletonChart, SkeletonText, LoadingOverlay } from './LoadingComponents';

const PortfolioAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);
  const [timeRange, setTimeRange] = useState('1M'); // 1D, 1W, 1M, 3M, 6M, 1Y

  // Simulate loading portfolio data
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      // Generate sample portfolio data
      const sampleData = generateSamplePortfolioData(timeRange);
      setPortfolioData(sampleData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRange]);

  const generateSamplePortfolioData = (range) => {
    const dataPoints = {
      '1D': 24,
      '1W': 7,
      '1M': 30,
      '3M': 90,
      '6M': 180,
      '1Y': 365
    };

    const points = dataPoints[range] || 30;
    const labels = [];
    const values = [];
    const profitLossValues = [];

    let baseValue = 100000; // Starting portfolio value

    for (let i = 0; i < points; i++) {
      // Generate labels based on time range
      if (range === '1D') {
        labels.push(`${i}:00`);
      } else if (range === '1W') {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        labels.push(days[i % 7]);
      } else {
        labels.push(`Day ${i + 1}`);
      }

      // Generate realistic portfolio values with some volatility
      const change = (Math.random() - 0.5) * 2000; // Random change between -1000 and +1000
      baseValue += change;
      values.push(Math.max(baseValue, 50000)); // Ensure minimum value

      // Generate profit/loss data
      profitLossValues.push(change);
    }

    return {
      portfolio: {
        labels: labels.slice(-Math.min(points, 20)), // Show last 20 points max
        values: values.slice(-Math.min(points, 20))
      },
      profitLoss: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [2500, -800, 1200, 3400]
      },
      assetAllocation: {
        labels: ['Stocks', 'Mutual Funds', 'Bonds', 'Cash'],
        values: [65, 20, 10, 5]
      },
      summary: {
        totalValue: values[values.length - 1],
        totalInvestment: 95000,
        totalGain: values[values.length - 1] - 95000,
        dayChange: values[values.length - 1] - values[values.length - 2] || 0,
        dayChangePercent: ((values[values.length - 1] - values[values.length - 2]) / values[values.length - 2] * 100) || 0
      }
    };
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatPercent = (percent) => {
    const sign = percent >= 0 ? '+' : '';
    return `${sign}${percent.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="portfolio-analytics" style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <SkeletonText lines={1} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <SkeletonChart height={300} />
          </div>
          <div className="col-md-4">
            <SkeletonChart height={300} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <SkeletonChart height={250} />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <SkeletonText lines={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-analytics" style={{ padding: '20px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>Portfolio Analytics</h2>
        
        {/* Time Range Selector */}
        <div className="time-range-selector">
          {['1D', '1W', '1M', '3M', '6M', '1Y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`btn btn-sm ${timeRange === range ? 'btn-primary' : 'btn-outline-secondary'}`}
              style={{ marginLeft: '4px' }}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body text-center">
              <h6 className="card-title" style={{ color: 'var(--text-muted)' }}>Total Value</h6>
              <h4 style={{ color: 'var(--text-primary)' }}>
                {formatCurrency(portfolioData.summary.totalValue)}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body text-center">
              <h6 className="card-title" style={{ color: 'var(--text-muted)' }}>Total Investment</h6>
              <h4 style={{ color: 'var(--text-primary)' }}>
                {formatCurrency(portfolioData.summary.totalInvestment)}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body text-center">
              <h6 className="card-title" style={{ color: 'var(--text-muted)' }}>Total Gain/Loss</h6>
              <h4 style={{ 
                color: portfolioData.summary.totalGain >= 0 ? 'var(--profit-color)' : 'var(--loss-color)' 
              }}>
                {formatCurrency(portfolioData.summary.totalGain)}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body text-center">
              <h6 className="card-title" style={{ color: 'var(--text-muted)' }}>Day Change</h6>
              <h4 style={{ 
                color: portfolioData.summary.dayChange >= 0 ? 'var(--profit-color)' : 'var(--loss-color)' 
              }}>
                {formatCurrency(portfolioData.summary.dayChange)}
              </h4>
              <small style={{ 
                color: portfolioData.summary.dayChangePercent >= 0 ? 'var(--profit-color)' : 'var(--loss-color)' 
              }}>
                {formatPercent(portfolioData.summary.dayChangePercent)}
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <PortfolioChart data={portfolioData.portfolio} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <AssetAllocationChart data={portfolioData.assetAllocation} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <ProfitLossChart data={portfolioData.profitLoss} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>Portfolio Insights</h5>
            </div>
            <div className="card-body">
              <div className="insight-item mb-3">
                <div className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Best Performing Asset:</span>
                  <span style={{ color: 'var(--profit-color)', fontWeight: 'bold' }}>Stocks (+12.5%)</span>
                </div>
              </div>
              <div className="insight-item mb-3">
                <div className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Worst Performing Asset:</span>
                  <span style={{ color: 'var(--loss-color)', fontWeight: 'bold' }}>Bonds (-2.1%)</span>
                </div>
              </div>
              <div className="insight-item mb-3">
                <div className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Portfolio Diversity Score:</span>
                  <span style={{ color: 'var(--info)', fontWeight: 'bold' }}>8.5/10</span>
                </div>
              </div>
              <div className="insight-item mb-3">
                <div className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Risk Level:</span>
                  <span style={{ color: 'var(--warning)', fontWeight: 'bold' }}>Moderate</span>
                </div>
              </div>
              <hr style={{ borderColor: 'var(--border-color)' }} />
              <div className="text-center">
                <small style={{ color: 'var(--text-muted)' }}>
                  Last updated: {new Date().toLocaleString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
