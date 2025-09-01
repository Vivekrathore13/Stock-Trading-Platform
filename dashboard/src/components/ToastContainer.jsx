import React from 'react';
import { ToastContainer as ReactToastifyContainer } from 'react-toastify';
import { useTheme } from '../contexts/ThemeContext';

const ToastContainer = () => {
  const { isDark } = useTheme();

  return (
    <ReactToastifyContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={isDark ? 'dark' : 'light'}
      toastStyle={{
        backgroundColor: isDark ? 'var(--card-bg)' : 'var(--card-bg)',
        color: isDark ? 'var(--text-primary)' : 'var(--text-primary)',
        border: `1px solid ${isDark ? 'var(--border-color)' : 'var(--border-color)'}`,
      }}
    />
  );
};

export default ToastContainer;
