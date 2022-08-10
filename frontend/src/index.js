import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home.js';
import NFT_portfolio from './pages/NFT_portfolio';

ReactDOM.render(
  <React.StrictMode>
    <NFT_portfolio />
  </React.StrictMode>,
  document.getElementById("root")
);
