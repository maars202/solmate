import React, { useState, useEffect } from "react";
import ActionAreaCard from "../utils/actionareacard";
import axios from "axios";
import { dividerClasses } from "@mui/material";

const NFT_portfolio = () => {
  const [nfts, setcurrData1] = useState([]);

  function getNFT() {
    var data = JSON.stringify({
      ownerKey: "9GBTns7DZSZzXYAfxgmXxqCZZgTQCvF6uKbvzohF2Xbx",
    });

    var config = {
      method: "get",
      url: "http://localhost:5000/getNFTbyOwner?ownerKey=9GBTns7DZSZzXYAfxgmXxqCZZgTQCvF6uKbvzohF2Xbx",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setcurrData1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // https://stackoverflow.com/questions/8495687/split-array-into-chunks
  function getchunks(nft_list) {
    const chunkSize = 3;
    const list = [];
    for (let i = 0; i < nft_list.length; i += chunkSize) {
      const chunk = nft_list.slice(i, i + chunkSize);
      list.push(chunk);
    }
    return list;
  }

  useEffect(() => {
    // setInfo(data.info);
    getNFT();
  }, []);

  const nfts_processed = getchunks(nfts);
  console.log(nfts_processed[0])

  return (
    <div className="col-8 col-md-8">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {nfts_processed.map((tiny_chunk, index) => {
          // console.log(tiny_chunk);
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {tiny_chunk.map((item2, index2) => {
                console.log("this is the item", item2, index2);
                return (
                  <div>
                    <ActionAreaCard props={item2} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NFT_portfolio;
