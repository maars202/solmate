import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Theme from "../theme";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ActionAreaCard from "./actionAreaCard";

import logo from './image_1.svg';

const ApprovalPage = () => {
    const navigate = useNavigate();

    return (
    <ThemeProvider theme={Theme}>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: "background.default",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            width: "97%",
            height: "8%",
            textAlign: "center"
          }}
        >

          <p>Approved</p>
          <div
            style={{
              padding: "15px",
            }}
          >
          </div>
        </div>


            <div style={{ 
              // border: "1px solid white",
              color: "rgba(255, 255, 255, 0.65)",
              textAlign: "center",
              fontSize: "28px", 
              paddingRight: "15%",
              paddingLeft: "15%",
              marginTop: "20%"
            }}>
              <p>Congrats, one of your NFTs has evolved! </p></div>
        <div style={{ 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "center", 
          // border: "1px solid white",
          }}>

        <div
          style={{
            // border: "1px solid white",
            color: "white",
            width: "60%",
            height: "70%",
            marginTop: '30px',
            backgroundColor: "#48484A",
            marginHorizontal: "20%",
            borderRadius: "30px",
            fontSize: "25px",
            textAlign: "center"
          }} onClick={() => {
            navigate("/collection")
          }}
        >

          <p>View NFTs</p>
        
        </div>


        </div>



      </Box>
    </ThemeProvider>
  );
};

export default ApprovalPage;