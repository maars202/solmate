import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function TokenCard({ nftName }) {

  return (
    <Card
      sx={{
        backgroundColor: "#313131",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="rgba(235, 235, 245, 0.6)"
            fontSize="15px"
          >
            Token Required
          </Typography>
          <Typography variant="body2" color="#FFFFFF" fontSize="17px">
            Bulbasaur
          </Typography>
          <Typography
            variant="body2"
            color="B889FF"
            fontSize="15px"
            fontStyle="italic"
          >
            GameFreak
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
