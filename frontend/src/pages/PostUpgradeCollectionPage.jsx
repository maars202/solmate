import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PostUpgradeCollectionCard from "../components/Collection/PostUpgradeCollectionCard";
import CollectionFilter from "../components/Collection/CollectionFilter";
import bulbasaurImage from "../assets/nftprofile/Bulbasaur.png"
import ivysaurImage from "../assets/nftprofile/Ivysaur.png"
import venasaurImage from "../assets/nftprofile/Venasaur.png"


const collectionData = [
    {
        id: 2,
        name: 'Ivysaur',
        collateral: ivysaurImage,
        level: 10,
        nextEvolution: 25,
        tier: 'Silver',
        value: 13
    },
]

const PostUpgradeCollectionPage = () => {
    const navigate = useNavigate();

    return (
        <Box>
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
                                    <PostUpgradeCollectionCard cardData={cardData} />
                                </Box>
                            </Grid>

                        ))
                    }
                </Grid>
            </Box>
        </Box>

    );
};

export default PostUpgradeCollectionPage;
