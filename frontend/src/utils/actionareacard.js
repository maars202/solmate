import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
var axios = require("axios");

export default function ActionAreaCard(item) {
  var uri = item["props"]["uri"];
  console.log("displaying", uri);
  const [nft_json, setcurrData] = useState([]);
  const [nft, setcurrData2] = useState([]);

  function getNFT_Json() {
    var config = {
      method: "get",
      url: uri,
      headers: {
        Cookie: "__cflb=02DiuEkP8hw3gxppKv9wxcHysW9bCMHdJH3X9sQP3ZdiC",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setcurrData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    useEffect(() => {
      // setInfo(data.info);
      getNFT_Json();
    }, []);

    console.log(nft_json);

  
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={nft_json["image"]}
          alt={JSON.stringify(nft_json["image"])}
        />
      </CardActionArea>
      <CardContent>
        <Typography>{JSON.stringify(nft_json["name"])}</Typography>
        <Typography>
          {JSON.stringify(nft_json["description"])}
        </Typography>
      </CardContent>
    </Card>
  );
}
