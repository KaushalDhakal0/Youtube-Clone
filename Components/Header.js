import React, { useState } from "react";
import "./Css/header-css.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon className="dummy" />
        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube Logo"
          />
        </Link>
      </div>
      <div className="header_middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search "
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-inputButton" />
        </Link>
      </div>
      <div className="header_right">
        <MicIcon />
        <VideoCallIcon />
        <ViewComfyIcon />
        <NotificationsIcon />
        <Avatar src="https://avatars.githubusercontent.com/u/50737484?s=400&u=438d6468f151774952e2c5892f966c398d644194&v=4" />
      </div>
    </div>
  );
}

export default Header;
