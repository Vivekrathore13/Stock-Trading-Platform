import React from 'react';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading, error } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Authentication Error</h4>
            <p>{error}</p>
            <hr />
            <p className="mb-0">
              <a href="http://localhost:3004/login" className="btn btn-primary">
                Go to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page
    window.location.href = 'http://localhost:3004/login';
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
