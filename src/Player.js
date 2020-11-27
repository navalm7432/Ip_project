import React, { useState, useEffect } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Avatar from "@material-ui/core/Avatar";
import "./Player.css";
import axios from "./axios";
import { LiveTv } from "@material-ui/icons";

function Pages({ channelImg, id }) {
  const API_KEY = "AIzaSyCP-A8bkfdV-9k9-vPmRZz4L6oZBeB3sYs";
  const url = `videos?part=statistics%2Csnippet%2CcontentDetails&id=${id}&key=${API_KEY}`;
  const [info, setinfo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(url);
      console.log(requests.data.items);
      setinfo(requests.data.items);
    }
    fetchData();
  }, [url]);
  const numb = (number) => {
    if (number.length === 4) {
      return (
        number.substr(0, 1) + "." + number.substr(1, number.length - 3) + "k"
      );
    } else if (number.length === 5) {
      return (
        number.substr(0, 2) + "." + number.substr(2, number.length - 4) + "k"
      );
    } else if (number.length === 6) {
      return (
        number.substr(0, 3) + "." + number.substr(3, number.length - 5) + "k"
      );
    } else if (number.length === 7) {
      return (
        number.substr(0, 1) + "." + number.substr(1, number.length - 6) + "M"
      );
    } else if (number.length === 8) {
      return number.substr(0, 2) + "M";
    } else if (number.length === 9) {
      return number.substr(0, 3) + "M";
    } else if (number.length === 10) {
      return (
        number.substr(0, 1) + "." + number.substr(1, number.length - 8) + "B"
      );
    } else if (number.length === 11) {
      return number.substr(0, 2) + "B";
    }
  };
  const dateConvert = (str) => {
    return str.substr(0, 10).replace(/-/g, ",");
  };
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="page">
      {info.map((details) => (
        <div className="leftpart">
          <div className="vid_datails">
            {/*div for title and views+ date */}
            <h4>{details.snippet.title}</h4>
            <p>
              {numb(details.statistics.viewCount)} .{" "}
              {dateConvert(details.snippet.publishedAt)}
            </p>
          </div>
          <div channelName="channel_descp">
            <div className="flex">
              {/* this div contains 2 div for ch name+ icon and div for susb button+ bell icon*/}
              <div className="ch_info">
                {/*this is only for displaying avatar and ch name in flex and to give flex size  */}
                <Avatar src={channelImg} />
                <p className="chImageFlex">
                  {details.snippet.channelTitle} <CheckCircleRoundedIcon />
                </p>
              </div>
            </div>
            <p className="description">
              {truncate(details.snippet.description, 250)}{" "}
            </p>
          </div>
          <hr />
          <div className="cmmt">
            {/*this is for comment and sort icon to be displayed in flex */}
            <p>{numb(details.statistics.commentCount)}</p>
            <span>
              <p> Comments</p>
            </span>
          </div>
          <div className="input_cmmt">
            {" "}
            {/*this for to display avatar and input field to be in flex */}
            <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjOEZulQIjo0IYV2Vfo6V1F8luNi4kRo_1Zi0TJUg=s96-c-rg-br100" />
            <input className="cmmtInput" placeholder="Add a public comment" type="text" />
          </div>
        </div>
      ))}
      <div className="rightpart">
        {/*this div is for right side of the page */}
        <h1>
          <LiveTv style={{fontSize:"32px",color:"red"}}/>TECtube
        </h1>
        <div className="detail">
          Made by: - <br />
          Naval Malaviya (TU4F1819046) <br />
          Sagar Ghondlekar (TU4F1819044) <br />
          Priya Rithadia (TU4F181950) <br />
        </div>
      </div>
    </div>
  );
}
export default Pages;
