import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CollectionCard from "../components/Collection/CollectionCard";
import CollectionFilter from "../components/Collection/CollectionFilter";
import bulbasaurImage from "../assets/nftprofile/Bulbasaur.png"
import ivysaurImage from "../assets/nftprofile/Ivysaur.png"
import venasaurImage from "../assets/nftprofile/Venasaur.png"


const collectionData = [
  {
    id: 1,
    name: 'Bulbasaur',
    collateral: bulbasaurImage,
    tier: 'Basic',
    value: 10
  },
  // {
  //   id: 2,
  //   name: 'Ivysaur',
  //   collateral: ivysaurImage,
  //   tier: 'Intermediate',
  //   value: 20
  // },
  // {
  //   id: 3,
  //   name: 'Venasaur',
  //   collateral: venasaurImage,
  //   tier: 'Advanced',
  //   value: 30
  // },
]

const Collection = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* <div
        style={{
          // borderRadius: "5px",
          color: "white",
          width: "97%",
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

        <div
          style={{
            padding: "15px",
          }}
        >
        </div>
      </div> */}
      <Grid container mb={3} alignItems='center'>
        <Grid item xs={6}>
          <Box>
            <CollectionFilter />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <AutoAwesomeMosaicIcon sx={{ color: 'text.primary' }} />
          </Box>
        </Grid>
      </Grid>
      {/* <div
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
        > */}
      <Grid container spacing={2}>
        {
          collectionData.map((cardData, index) => (
            <Grid item xs={6}>
              <Box>
                <CollectionCard cardData={cardData} />
              </Box>
            </Grid>

          ))
        }
      </Grid>
    </Box>
  );
};

export default Collection;
