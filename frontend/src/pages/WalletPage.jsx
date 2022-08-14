import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const WalletPage = () => {
  const navigate = useNavigate();
//   const handleSkip = () => {
//     navigate('/home')
// }

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
          if (resp.publicKey.toString()){
            navigate('/collection')
          }
          // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
      } catch (err) {
          // { code: 4001, message: 'User rejected the request.' }
      }}

 

 // Similar to componentDidMount and componentDidUpdate:
 useEffect(async () => {
  const isPhantomInstalled = window.phantom?.solana?.isPhantom


  
});




  return (
    <div style={{
      // backgroundImage: "../assets/walletassets/walletBackground.png", 
      // backgroundImage:`url(data:image/jpeg;base64,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)`,
      backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-ttK2c7JzW1Sdl1Sj57y9C6RjUDB4MbGlA&usqp=CAU)`,
      // backgroundImage:`url(../assets/walletassets/walletBackground.png)`,

      // backgroundSize: "cover"
      backgroundSize: "fit",
      // backgroundColor: "black",
      width: "100%",
      height: "100%",
      // top: "0",
      // bottom: "0",
      position: "fixed"
  }}>
  
  <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between", height: "45%", borderRadius: "20px",  color: "white", margin: "20px", marginTop: "90%"}}>
    <Typography variant='h4'>Connect Wallet</Typography>

    <div style={{color: "white", height: "17%", fontStyle: "italic"}}>By connecting your wallet, you agree to our 
    <span style={{color: "#60A5FA"}}> Term of Service </span>
     and our 
     <span style={{color: "#60A5FA"}}> Privacy Policy</span></div>
    {/* <div style={{color: "white", height: "15%", fontStyle: "italic"}}>By connecting your wallet, you agree to our Term of Service and our Privacy Policy</div> */}

    <div style={{border: '1px solid rgba(255, 255, 255, 0.45)',
        borderRadius: "5px",  color: "white", 
        height: "17%", textAlign: "center", 
        justifyContent: "center", fontStyle: "italic"}} onClick={()=>{connectWallet()}}
        >
          <p>Import using Secret Recovery Phrase</p>
      </div>

      <div style={{ color: "rgba(255, 255, 255, 0.45)", 
        height: "17%", textAlign: "center", 
        justifyContent: "center",}} onClick={()=>{connectWallet()}}>
          <p>Or import Wallet</p>
      </div>

      <div style={{border: '1px solid rgba(255, 255, 255, 0.45)', 
        borderRadius: "5px",  color: "white", 
        height: "17%", textAlign: "center", 
        justifyContent: "center",}} onClick={()=>{connectWallet()}}>
          <p>Connect Phantom Wallet</p>
      </div>


   
  </div>
  

  
  
  </div>
  )
}

export default WalletPage;