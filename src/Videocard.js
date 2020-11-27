import React, { useEffect, useState } from "react";
import "./Videocard.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "./axios";

function Videocard({ channelImage, id }) {
  const API_KEY = "AIzaSyCP-A8bkfdV-9k9-vPmRZz4L6oZBeB3sYs";
  const url = `videos?part=statistics%2Csnippet&id=${id}&key=${API_KEY}`;
  const [info, setinfo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(url);
      //   console.log(requests.data.items);
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
  const truncate = (str) => {
    return str.substr(0, 10).replace(/-/g, ",");
  };
  const today = new Date();
  var d = info.map((date) => truncate(date.snippet.publishedAt));
  const dateString = d.toString();
  const past = new Date(dateString);

  function calcDate(date1, date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var message = "";
    if (days <= 31) {
      return `${days} days ago`;
    } else if (days <= 365) {
      return `${months} Months ago`;
    } else if (days > 365) {
      return `${years} years ago`;
    }

    return message;
  }

  return info.map((details) => (
    <div className="videocard">
      <img
        className="videocard_thumbnail"
        src={details.snippet.thumbnails.maxres.url}
        alt="Chill"
      />
      <div className="videocard_info">
        <Avatar className="videocard_avatar" src={channelImage} alt="chill" />
        <div className="videocard_text">
          <h4>{details.snippet.title}</h4>
          <p>{details.snippet.channelTitle}</p>
          <p>
            {numb(details.statistics.viewCount)} . {calcDate(today, past)}
          </p>
        </div>
        <div class="flexForMob">
          <h4>{details.snippet.title}</h4>
          <p>
            {details.snippet.channelTitle}.{numb(details.statistics.viewCount)}{" "}
            . {calcDate(today, past)}
          </p>
        </div>
      </div>
    </div>
  ));
}

export default Videocard;
