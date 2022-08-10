import React, { useState, useEffect } from "react";
// import data from "../../utils/data";
import ActionAreaCard from "../utils/actionareacard";
// import AboutShortDetail from "../about/AboutShortDetail";
import axios from "axios";

const NFT_portfolio = () => {
  const [nfts, setcurrData1] = useState([]);

  function getNFT() {
    var config = {
      method: "get",
      url: "https://openapi.debank.com/v1/user/nft_list?id=0x003B0b080e092793d8e1A393656907F1f55e077E&chain_id=eth&is_all=True",
      headers: {},
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

  return (
    // <div className="row justify-content-center">
    //   {info !== null && (
    //     <>
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
    //     </>
    //   // )}
    // </div>
  );
};

export default NFT_portfolio;
