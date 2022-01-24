import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import { AuthProvider } from 'contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
