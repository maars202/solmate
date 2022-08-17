import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NameCard from "../components/NftProfile/nameCard";
import ValueCard from "../components/NftProfile/valueCard";
import LevelCard from "../components/NftProfile/levelCard";
import { useLocation } from "react-router-dom";

const PostUpgradeNftProfile = () => {
  const params = useLocation();
  const cardData = params?.state?.cardData;
  const navigate = useNavigate();
  console.log(params)

  const goBack = () => {
    navigate("/upgraded_collection");
  };

  return (
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
      <Grid container>
        <Grid item xs={3}>
          <Box mt={2.5} mr={2} display='flex' justifyContent='flex-start'>
            <IconButton onClick={goBack}>
              <ArrowBackIosNewIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box mt={3} textAlign='center'>
            <Typography variant="h6" color='text.primary'>
              Pokemaniac.sol
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Box display='flex' justifyContent='center' m={3}>
        <img
          src={cardData.collateral}
          style={{ height: "250px" }}
          alt=""
        />
      </Box>

      <div
        style={{
          borderRadius: "5px",
          color: "white",
          backgroundColor: "#262625",
          height: "65%",
          padding: "10px",
        }}
      >
        <Box>
          <Typography variant="h6" color="text.primary">Solmate</Typography>
        </Box>
        <p></p>
        <NameCard nftName={cardData?.name} />
        <p></p>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ValueCard nftValue={cardData?.value} nftTier={cardData?.tier}/>
          </Grid>
          <Grid item xs={6}>
            <LevelCard level={cardData?.level} nextEvolution={cardData?.nextEvolution}/>
          </Grid>
        </Grid>

      </div>
    </Box>
  );
};

export default PostUpgradeNftProfile;
