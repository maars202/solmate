import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NameCard({ nftName }) {
  // const navigate = useNavigate();

  // const goToProfile = () => {
  //   console.log("goToProfile");
  //   navigate("/nftprofile");
  // };

  return (
    <Card
      sx={{
        backgroundColor: "#313131",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
      // onClick={() => {
      //   goToProfile();
      // }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="#FFFFFF" fontSize="17px">
            {nftName}
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.9)"
            fontSize="15px"
          >
            GameFreak
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
