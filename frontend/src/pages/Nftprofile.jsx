import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Theme from "../theme";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NameCard from "../components/NftProfile/nameCard";
import ValueCard from "../components/NftProfile/valueCard";
import LevelCard from "../components/NftProfile/levelCard";

const Nftprofile = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/collection");
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
            // borderRadius: "5px",
            color: "white",
            width: "97%",
            height: "8%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              padding: "15px",
            }}
          >
            <ArrowBackIosNewIcon onClick={()=>{goBack()}}/>
          </div>
          <p>Pokemaniac.sol</p>
          <div></div>
          <div></div>
        </div>
        <div
          style={{
            color: "white",
            width: "99%",
            height: "40%",
            textAlign: "center",
          }}
        >
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
            style={{ height: "250px", width: "250px" }}
            alt=""
          />
        </div>

        <div
          style={{
            borderRadius: "5px",
            color: "white",
            backgroundColor: "#262625",
            height: "65%",
            padding: "10px",
          }}
        >
          <Typography color="text.primary">Solmate</Typography>
          <p></p>
          <NameCard />
          <p></p>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#313131",
            }}
          >
            <ValueCard />
            <LevelCard />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Nftprofile;
