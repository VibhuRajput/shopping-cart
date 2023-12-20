import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { AppProvider } from './context';
// const root = ReactDOM.createRoot(document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
    <AppProvider />
  </React.StrictMode>
);
