import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Theme from "../theme";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ActionAreaCard from "./actionAreaCard";

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
            width: "97%",
            height: "8%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
            // border: "1px solid white",
            // borderRadius: "1px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            color: "white",
            width: "100%",
            height: "4%",
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
            // borderRadius: "5px",
            color: "white",
            width: "97%",
            height: "8%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              paddingLeft: "10px",
              fontFamily: "Poppins",
              fontSize: "14px",
            }}
          >
            Owned
          </p>
          <div
            style={{
              paddingTop: "12px",
            }}
          >
            <ArrowDropDownIcon />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div
            style={{
              padding: "15px",
            }}
          >
            <AutoAwesomeMosaicIcon />
          </div>
        </div>
        <div
          style={{
            // border: "1px solid white",
            // borderRadius: "1px",
            paddingLeft: "15px",
            color: "white",
            width: "35%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ActionAreaCard />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Collection;
