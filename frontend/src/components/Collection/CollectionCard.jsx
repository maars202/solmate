import * as React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function CollectionCard() {
  const theme = useTheme();
  const navigate = useNavigate();

  const goToNftProfile = () => {
    navigate("/nftprofile");
  }


  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#111827",
          border: `1px solid ${theme.palette.divider}`,
        }} onClick={goToNftProfile}>

        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
            alt=""
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Bulbasaur
            </Typography>
            <Typography variant="body2" color="text.primary">
              #01
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Value
            </Typography>
            <div
              style={{
                color: "white",
                width: "97%",
                height: "8%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                src={
                  "https://pbs.twimg.com/profile_images/1440155120788918286/HKyfyx-i_400x400.png"
                }
                height="20px"
                style={{paddingRight:"5px"}}
              />
              <Typography variant="body2" color="text.primary">
                10
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
