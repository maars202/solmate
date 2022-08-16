import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function EventCard() {
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: "#313131",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.65)"
            font="15px"
          >
            Event
          </Typography>
          <Typography variant="body2" color="#FFFFFF" font="17px">
            PokeFest
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
