import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard() {

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/nftprofile");
  }


  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#111827",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }} onClick={()=>{goToProfile()}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
        <CardContent>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.65)">
            Bulbasaur
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            #01
          </Typography>
          <div>
            <p></p>
          </div>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.65)">
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
            <Typography variant="body2" color="#FFFFFF">
              10
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
