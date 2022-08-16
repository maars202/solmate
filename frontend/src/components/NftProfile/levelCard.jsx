import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LevelCard({ level, nextEvolution }) {
  const navigate = useNavigate();

  const goToProfile = () => {
    console.log("goToProfile");
    navigate("/nftprofile");
  };

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: "#313131",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
      onClick={() => {
        goToProfile();
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.65)"
            font="15px"
          >
            Level
          </Typography>
          <Typography variant="body2" color="#FFFFFF" font="17px">
            {level}
          </Typography>
          <div>
            <p></p>
          </div>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.65)"
            font="15px"
          >
            Next Evolution
          </Typography>
          <Typography variant="body2" color="#FFFFFF" font="17px">
            {nextEvolution}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
