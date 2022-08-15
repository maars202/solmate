import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Theme from "../theme";
import logo from '../assets/verifiedPage/image_1.svg';

const VerifiedPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
      navigate("/qrcode");
    };
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

          <p>Verification</p>
          <div
            style={{
              padding: "15px",
            }}
          >
          </div>
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            height: "40%",
            textAlign: "center",
            marginTop: "40%",
          }}
        >
          <img style={{width: 220, height: 220,}} src={logo} />
        </div>


      </Box>
    </ThemeProvider>
  );
};

export default VerifiedPage;