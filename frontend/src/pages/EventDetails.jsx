import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TokenCard from "../components/EventDetails/tokenCard";
import EventCard from "../components/EventDetails/eventCard";

const EventDetails = () => {
  const navigate = useNavigate();

    const goForward = () => {
      navigate("/approval");
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
          <Box mt={2.5} mr={2} display="flex" justifyContent="flex-start">
            {/* <IconButton onClick={goBack}> */}
            {/* <ArrowBackIosNewIcon sx={{ color: "text.primary" }} /> */}
            {/* </IconButton> */}
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box mt={3} textAlign="center">
            <Typography variant="h6" color="text.primary">
              Approved
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box mt={2.5} mr={2} display="flex" justifyContent="flex-end">
            <IconButton onClick={goForward}>
              <ArrowForwardIosIcon sx={{ color: "text.primary" }} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>

      <div
        style={{
          color: "white",
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
        <Box>
          <Typography variant="h6" color="text.primary">
            Event Details
          </Typography>
        </Box>
        <p></p>
        <TokenCard />
        <p></p>
        <EventCard />
      </div>
    </Box>
  );
};

export default EventDetails;
