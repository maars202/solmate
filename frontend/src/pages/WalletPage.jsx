import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
// import { ReactComponent as WalletBackground } from '../assets/walletAssets/walletBackground.svg';
import backgroundImg from "./pexels-anni-roenkae-2156881 2.svg"
import backgroundImg2 from "./image 4.svg"
const WalletPage = () => {
  const navigate = useNavigate();
  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }

    window.open('https://phantom.app/', '_blank');
  };

  const connectWallet = async () => {
    const provider = getProvider(); // see "Detecting the Provider"
    try {
      const resp = await provider.connect();
      console.log(resp.publicKey.toString());
      if (resp.publicKey.toString()) {
        navigate('/home')
      }
    } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom
  });

  return (
    <Box style={{backgroundImage: `url(${backgroundImg2})`}}>
      <Box display='flex' flexDirection='column' justifyContent='flex-end' mx={3} sx={{ height: '100vh' }} >
        <Box my={5}>
          <Typography variant='h3' color='text.primary'>Connect Wallet</Typography>
        </Box>

        <Box mb={3}>
          <Typography color='text.secondary'>
            By connecting your wallet, you agree to our Term of Service and our Privacy Policy.
          </Typography>
        </Box>

        <Box mb={3}>
          <Button variant='contained' onClick={connectWallet} sx={{ width: '100%' }}>
            Import using Secret Recovery Phrase
          </Button>
        </Box>

        <Box textAlign='center' mb={3}>
          <Typography variant='body1' color='text.secondary'>
            Or
          </Typography>
        </Box>

        <Box mb={5}>
          <Button variant='contained' onClick={connectWallet} sx={{ width: '100%' }}>
            Connect Phantom Wallet
          </Button>
          
        {/*   
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.45)',
            borderRadius: "5px", color: "white",
            height: "17%", textAlign: "center",
            justifyContent: "center", fontStyle: "italic"
          }} onClick={() => { connectWallet() }}
          >
            <p>Import using Secret Recovery Phrase</p>
          </div>
    
          <div style={{
            color: "rgba(255, 255, 255, 0.45)",
            height: "17%", textAlign: "center",
            justifyContent: "center",
          }} onClick={() => { connectWallet() }}>
            <p>Or import Wallet</p>
          </div>
    
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.45)',
            borderRadius: "5px", color: "white",
            height: "17%", textAlign: "center",
            justifyContent: "center",
          }} onClick={() => { connectWallet() }}>
            <p>Connect Phantom Wallet</p>
          </div>
        */}
        </Box>
      </Box>

    </Box>
  )
}

export default WalletPage;