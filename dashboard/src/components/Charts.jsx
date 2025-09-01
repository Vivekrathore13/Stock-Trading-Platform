import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { useTheme } from '../contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Portfolio Performance Line Chart
export const PortfolioChart = ({ data, className = '' }) => {
  const { isDark } = useTheme();
  
  const chartData = {
    labels: data?.labels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: data?.values || [10000, 12000, 11500, 13000, 14500, 15200],
        borderColor: isDark ? '#4ade80' : '#28a745',
        backgroundColor: isDark ? 'rgba(74, 222, 128, 0.1)' : 'rgba(40, 167, 69, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDark ? '#ffffff' : '#212529',
        },
      },
      title: {
        display: true,
        text: 'Portfolio Performance',
        color: isDark ? '#ffffff' : '#212529',
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
      y: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
          callback: function(value) {
            return '₹' + value.toLocaleString();
          },
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
    },
  };

  return (
    <div className={`chart-container ${className}`} style={{ height: '300px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

// Asset Allocation Pie Chart
export const AssetAllocationChart = ({ data, className = '' }) => {
  const { isDark } = useTheme();
  
  const chartData = {
    labels: data?.labels || ['Stocks', 'Bonds', 'Mutual Funds', 'Cash'],
    datasets: [
      {
        data: data?.values || [60, 20, 15, 5],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
        borderColor: isDark ? '#2d2d2d' : '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: isDark ? '#ffffff' : '#212529',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Asset Allocation',
        color: isDark ? '#ffffff' : '#212529',
      },
    },
  };

  return (
    <div className={`chart-container ${className}`} style={{ height: '300px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

// Stock Price Chart (Candlestick-like using Bar chart)
export const StockPriceChart = ({ data, className = '' }) => {
  const { isDark } = useTheme();
  
  const chartData = {
    labels: data?.labels || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Stock Price',
        data: data?.values || [100, 105, 98, 110, 115],
        backgroundColor: (ctx) => {
          const value = ctx.parsed.y;
          const prevValue = ctx.chart.data.datasets[0].data[ctx.dataIndex - 1] || value;
          return value >= prevValue ? 
            (isDark ? '#4ade80' : '#28a745') : 
            (isDark ? '#f87171' : '#dc3545');
        },
        borderColor: (ctx) => {
          const value = ctx.parsed.y;
          const prevValue = ctx.chart.data.datasets[0].data[ctx.dataIndex - 1] || value;
          return value >= prevValue ? 
            (isDark ? '#4ade80' : '#28a745') : 
            (isDark ? '#f87171' : '#dc3545');
        },
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Stock Price Movement',
        color: isDark ? '#ffffff' : '#212529',
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
      y: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
          callback: function(value) {
            return '₹' + value;
          },
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
    },
  };

  return (
    <div className={`chart-container ${className}`} style={{ height: '250px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

// Profit/Loss Chart
export const ProfitLossChart = ({ data, className = '' }) => {
  const { isDark } = useTheme();
  
  const chartData = {
    labels: data?.labels || ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Profit/Loss',
        data: data?.values || [500, -200, 800, 300],
        backgroundColor: (ctx) => {
          return ctx.parsed.y >= 0 ? 
            (isDark ? '#4ade80' : '#28a745') : 
            (isDark ? '#f87171' : '#dc3545');
        },
        borderColor: (ctx) => {
          return ctx.parsed.y >= 0 ? 
            (isDark ? '#4ade80' : '#28a745') : 
            (isDark ? '#f87171' : '#dc3545');
        },
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Weekly Profit/Loss',
        color: isDark ? '#ffffff' : '#212529',
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
      y: {
        ticks: {
          color: isDark ? '#b3b3b3' : '#6c757d',
          callback: function(value) {
            return '₹' + value;
          },
        },
        grid: {
          color: isDark ? '#404040' : '#dee2e6',
        },
      },
    },
  };

  return (
    <div className={`chart-container ${className}`} style={{ height: '250px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};
