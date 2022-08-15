import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import GettingStartedPage from './pages/GettingStartedPage';
import { ThemeProvider } from '@mui/material/styles';
import Wallet from './pages/WalletPage';
import Nftprofile from './pages/NftProfile';
import Collection from './pages/Collection';
import QRcode from './pages/QrcodePage';
import VerifiedPage from './pages/VerifiedPage';

import Theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GettingStartedPage />} />
          <Route path="home" element={<App />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="collection" element={<Collection />} />
          <Route path="nftprofile" element={<Nftprofile />} />
          <Route path="qrcode" element={<QRcode />} />
          <Route path="verified" element={<VerifiedPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
