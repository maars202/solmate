import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Theme from "../theme";
import QrCodeIcon from "@mui/icons-material/QrCode";
// import GettingStartedStepper from "../components/GettingStarted/GettingStartedStepper";

const Collection = () => {
  const navigate = useNavigate();

  // const handleSkip = () => {
  //   navigate("/home");
  // };
  return (
    <ThemeProvider theme={Theme}>
      <Box
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        sx={{
          backgroundColor: "background.default",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            // borderRadius: "5px",
            color: "white",
            width: "99%",
            height: "8%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // textAlign: "center",
          }}
        >
          <div></div>
          <div></div>
          <p>Pokemaniac.sol</p>
          <div
            style={{
              padding: "15px",
            }}
          >
            <QrCodeIcon />
          </div>
        </div>
        <div
          style={{
            border: "1px solid white",
            // borderRadius: "1px",
            color: "white",
            width: "99%",
            height: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          NFTs
        </div>
        <div
          style={{
            border: "1px solid white",
            borderRadius: "5px",
            color: "white",
            width: "99%",
            height: "10%",
          }}
        ></div>
      </Box>
    </ThemeProvider>
  );
};

export default Collection;
