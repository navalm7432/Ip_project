import React, { useEffect, useState } from "react";
import "./VideoRow.css";
import axios from "./axios";
function VideoRow({ fetchUrl }) {
  const [videoBox, setvideoBox] = useState([]);
  const [vidId, setvidId] = useState("");
  const location = `${window.location.pathname}/${vidId}`;
  console.log(location);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setvideoBox(requests.data.items);
    }
    fetchData();
  }, [fetchUrl]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const handleClick = (vId) => {
    if (vidId) {
      setvidId("");
    } else {
      setvidId(vId);
    }
    // console.log(vidId);
  };
  return (
    <div class="wrapper">
      {videoBox.map((video) => (
        <div
          className="videorow"
          onClick={() => handleClick(video.contentDetails.videoId)}>
          <iframe className="iframe"
            title="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
            frameBorder="0"
            allow="fullscreen ;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          {/* <img
            src={video.snippet.thumbnails.maxres.url}
            alt={video.snippet.channelTitle}
          /> */}
          <div className="videorow_text">
            <h5 className="fordesktop_Title">{video.snippet.title}</h5>
            <h5 className="forMob_Title">
              {truncate(video.snippet.title, 38)}
            </h5>
            <div class="flex">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
              <p class="chTitle">{video.snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoRow;
