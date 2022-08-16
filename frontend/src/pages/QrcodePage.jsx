import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Theme from "../theme";
import logo from '../assets/qrcode/QR_Code.svg';
import syncLogo from "../assets/qrcode/sync.svg";

const QRcode = () => {
    const navigate = useNavigate();

      const goBack = () => {
        navigate("/home");
      };

      const goForward = () => {
        navigate("/verified");
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
          <Grid container>
            <Grid item xs={3}>
              <Box mt={2.5} mr={2} display="flex" justifyContent="flex-start">
                <IconButton onClick={goBack}> 
                <ArrowBackIosNewIcon sx={{ color: "text.primary" }} />
                </IconButton>
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
              <Box
                mt={2.5}
                mr={2}
                display="flex"
                justifyContent="flex-end"
              ></Box>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
          <div
            style={{
              color: "white",
              width: "100%",
              height: "40%",
              textAlign: "center",
              marginTop: "20%",
            }}
          >
            <img
              style={{ width: 220, height: 220 }}
              src={logo}
              onClick={() => {
                goForward();
              }}
            />
          </div>

          <div
            style={{
              borderRadius: "5px",
              color: "rgba(255, 255, 255, 0.45)",
              height: "10%",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "12px",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            <p>
              Almost there... prove your entry by showing this to the ticket
              master!
            </p>
          </div>

          <div
            style={{
              color: "white",
              width: "100%",
              height: "4%",
              textAlign: "center",
            }}
          >
            <img style={{ width: 50, height: 50 }} src={syncLogo} />
          </div>
        </Box>
      </ThemeProvider>
    );
};

export default QRcode;