import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";
import { LiveTv } from "@material-ui/icons";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const show = () => {
    var l = document.getElementById("left");
    var c = document.getElementById("center");
    var h = document.getElementById("hidden");
    var s = document.getElementById("show");
    l.classList.toggle("display");
    c.classList.toggle("display");
    h.classList.toggle("display");
    s.classList.toggle("display");
  };
  return (
    <div className="header">
      <div className="left" id="left">
        <LiveTv />
        <Link to="/">
        <h3 style={{color:"red"}}>Tectube</h3>
        </Link>
      </div>

      <div className="center" id="center">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon style={{color:"black"}}/>
        </Link>
      </div>
      <div className="hidden" id="hidden" onClick={show}>
        <SearchIcon />
      </div>
      <div class="show" id="show" onClick={show}>
        <CloseIcon />
      </div>
      <div className="right">
        <Avatar
          className="icon avatar"
          src="https://lh3.googleusercontent.com/a-/AOh14GjOEZulQIjo0IYV2Vfo6V1F8luNi4kRo_1Zi0TJUg=s96-c-rg-br100"
        />
      </div>
    </div>
  );
}

export default Header;
