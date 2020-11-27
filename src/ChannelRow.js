import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
function ChannelRow({ verified, channelUrl }) {
  const [channel, setchannel] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(channelUrl);
      // console.log(requests.data);
      setchannel(requests.data.items);
      return requests;
    }
    fetchData();
  }, [channelUrl]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
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
    }
  };

  return channel.map((ch) => (
    <div className="channelRow">
      <Avatar
        className="channelRow_logo"
        alt="hello"
        src={ch.snippet.thumbnails.high.url}
      />
      <div className="channelRow_text">
        <h4>
          {ch.snippet.title} {verified && <CheckCircleIcon />}{" "}
        </h4>
        <p>
          {numb(ch.statistics.subscriberCount)} subscribers . videos{" "}
          {numb(ch.statistics.videoCount)}
        </p>
        <p class="forDesktop_chDescription">
          {truncate(ch.snippet.description, 150)}
        </p>
        <p class="forMobile_chDescription">
          {truncate(ch.snippet.description, 100)}
        </p>
      </div>
    </div>
  ));
}

export default ChannelRow;
