import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Box } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import GettingStartedPage from './pages/GettingStartedPage';
import App from './App';
import WalletPage from './pages/WalletPage';
import Nftprofile from './pages/NftProfile';
import Collection from './pages/Collection';
import QRcode from './pages/QrcodePage';
import VerifiedPage from './pages/VerifiedPage';
import EventDetails from './pages/EventDetails';
import ApprovalPage from './pages/ApprovalPage';
import PostUpgradeApp from './pages/PostUpgradeApp';
import PostUpgradeNftProfile from './pages/PostUpgradeNftProfile';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Box sx={{ backgroundColor: 'background.default', height: '100vh', minHeight: '100vh' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GettingStartedPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="home" element={<App />} />
            <Route path="collection" element={<Collection />} />
            {/* <Route path="collection" element={<Marketplace />} /> */}
            <Route path="nftprofile" element={<Nftprofile />} />
            <Route path="upgraded_nftprofile" element={<PostUpgradeNftProfile />} />
            <Route path="qrcode" element={<QRcode />} />
            <Route path="verified" element={<VerifiedPage />} />
            <Route path='event' element={<EventDetails/>} />
            <Route path='approval' element={<ApprovalPage/>}/>
            <Route path='upgraded_collection' element={<PostUpgradeApp/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
