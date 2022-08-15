import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ValueCard() {
  const navigate = useNavigate();

  const goToProfile = () => {
    console.log("goToProfile");
    navigate("/nftprofile");
  };

  return (
    <Card
      sx={{
        maxWidth: 150,
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
            Value
          </Typography>
          <Typography variant="body2" color="#FFFFFF" font="17px">
            10 SOL
          </Typography>
          <div>
            <p></p>
          </div>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.65)"
            font="15px"
          >
            Tier
          </Typography>
          <Typography variant="body2" color="#FFFFFF" font="17px">
            Basic
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
