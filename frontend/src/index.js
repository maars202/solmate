import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/home.js';
import NFT_portfolio from './pages/NFT_portfolio';
// import NFT_portfolio from "./pages/NFT_lookup";
// import ItemExampleHeaders from './pages/NFT_Viewer'

// var cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// NFT_portfolio.use(cors(corsOptions));

ReactDOM.render(
  <React.StrictMode>
    <NFT_portfolio />
  </React.StrictMode>,
  document.getElementById("root")
);
