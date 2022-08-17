import React from "react";
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
    level: 9,
    nextEvolution: 10,
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

  return (
    <Box>
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
