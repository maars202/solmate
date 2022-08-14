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

            color: "white",
            width: "99%",
            height: "40%",
            textAlign: "center"
          }}
        >

          {/* <img src={"../assets/nftprofile/Card.png"} style={{height: "100px", width: "100px"}}alt="" /> */}
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" style={{height: "200px", width: "200px"}}alt="" />
        </div>

        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "#262625",
            height: "50%",
            padding: "10px",
            // justifyContent: "space-between"
          }}
        >
          <Typography color='text.primary'>Solmate</Typography>
          

                <div
                style={{
                  borderRadius: "5px",
                  color: "white",
                  height: "20%",
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  backgroundColor: "#313131",
                  marginTop: "20px"

                }}
                >

                  <div style={{ width: "20%"}}></div>
                  <div style={{textAlign: "center"}}>
                    <p>Bulbasaur </p>
                    <p>GameFreak</p>
                  </div>

              </div>


              <div
                style={{
                  borderRadius: "5px",
                  color: "white",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  backgroundColor: "#313131",
                  marginTop: "20px",

                }}
                >

                  <div style={{display: "flex",
                flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{width: "50%", 
                      display: "flex",
                      flexDirection: "column",}}>
                          <div>value</div>
                          <div>10 SOL</div>
                      </div>

                      <div style={{width: "50%", 
                      display: "flex",
                      flexDirection: "column",}}>
                          <div>Level</div>
                          <div>9</div>
                      </div>

                      
                        
                  </div>

                  <div style={{ display: "flex",
                flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{ width: "50%", 
                      display: "flex",
                      flexDirection: "column",}}>
                          <div>Tier</div>
                          <div>Basic</div>
                      </div>

                      <div style={{ width: "50%", 
                      display: "flex",
                      flexDirection: "column",}}>
                          <div>Next Evolution</div>
                          <div>10</div>
                      </div>

                      
                        
                  </div>


                  

              </div>


              





          
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Collection;
