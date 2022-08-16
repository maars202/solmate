import * as React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function CollectionCard({ cardData }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const goToNftProfile = () => {
    navigate("/upgraded_nftprofile", {
      state: {
        cardData
      }
    });
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
            image={cardData.collateral}
            alt=""
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cardData.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              #{cardData.id}
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
                {cardData.value}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
