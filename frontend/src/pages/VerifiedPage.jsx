import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import Theme from "../theme";
import logo from '../assets/verifiedPage/image_1.svg';

const VerifiedPage = () => {
    const navigate = useNavigate();
    const goForward = () => {
      navigate("/event");
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
              <Box
                mt={2.5}
                mr={2}
                display="flex"
                justifyContent="flex-start"
              ></Box>
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
              marginTop: "40%",
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
        </Box>
      </ThemeProvider>
    );
};

export default VerifiedPage;