import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseContext from './contexts/UseContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UseContext>
    <App />
  </UseContext>
  // </React.StrictMode>
)
