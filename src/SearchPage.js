import React from "react";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import req from "./req";
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <ChannelRow channelUrl={req.freeCodeCampChannel} />
      <hr />
      <VideoRow fetchUrl={req.freeCodeCampPlaylist} />
    </div>
  );
}
export default SearchPage;
