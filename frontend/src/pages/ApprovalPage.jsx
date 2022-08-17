import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, IconButton, ThemeProvider} from "@mui/material";
import Theme from "../theme";

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
              </Box>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>

          <div
            style={{
              // border: "1px solid white",
              color: "rgba(255, 255, 255, 0.65)",
              textAlign: "center",
              fontSize: "28px",
              paddingRight: "15%",
              paddingLeft: "15%",
              marginTop: "20%",
            }}
          >
            <p>Congrats, one of your NFTs has evolved! </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // border: "1px solid white",
            }}
          >
            <div
              style={{
                // border: "1px solid white",
                color: "white",
                width: "60%",
                height: "70%",
                marginTop: "30px",
                backgroundColor: "#48484A",
                marginHorizontal: "20%",
                borderRadius: "30px",
                fontSize: "25px",
                textAlign: "center",
              }}
              onClick={() => {
                navigate("/upgraded_collection");
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