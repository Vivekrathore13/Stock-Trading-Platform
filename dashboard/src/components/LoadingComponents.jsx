import React from 'react';

// Skeleton loading component for text
export const SkeletonText = ({ lines = 3, className = '' }) => {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="skeleton skeleton-text"
          style={{
            width: `${Math.random() * 40 + 60}%`, // Random width between 60-100%
            marginBottom: '0.5rem'
          }}
        />
      ))}
    </div>
  );
};

// Skeleton loading component for titles
export const SkeletonTitle = ({ className = '' }) => {
  return (
    <div className={`skeleton skeleton-title ${className}`} style={{ width: '40%' }} />
  );
};

// Skeleton loading component for charts
export const SkeletonChart = ({ height = 200, className = '' }) => {
  return (
    <div
      className={`skeleton skeleton-chart ${className}`}
      style={{ height: `${height}px` }}
    />
  );
};

// Skeleton loading component for tables
export const SkeletonTable = ({ rows = 5, columns = 4, className = '' }) => {
  return (
    <div className={`table-responsive ${className}`}>
      <table className="table">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index}>
                <div className="skeleton skeleton-text" style={{ width: '80%' }} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex}>
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: `${Math.random() * 30 + 50}%` }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Spinner component
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };

  return (
    <div className={`d-flex justify-content-center align-items-center ${className}`}>
      <div className={`spinner-border text-primary ${sizeClasses[size]}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

// Loading overlay component
export const LoadingOverlay = ({ isLoading, children, message = 'Loading...' }) => {
  if (!isLoading) {
    return children;
  }

  return (
    <div style={{ position: 'relative' }}>
      {children}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(var(--bg-primary), 0.8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <Spinner />
        <p className="mt-2 text-muted">{message}</p>
      </div>
    </div>
  );
};

// Card skeleton component
export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <SkeletonTitle />
        <SkeletonText lines={2} />
        <div className="skeleton skeleton-text" style={{ width: '30%', marginTop: '1rem' }} />
      </div>
    </div>
  );
};
