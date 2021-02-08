import React from "react";
import "./Css/sidebar-css.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import LibraryAddCheckSharpIcon from "@material-ui/icons/LibraryAddCheckSharp";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected={true} Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={LibraryAddCheckSharpIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={VideoLibraryIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />

      {/* <div className="sidebar-first">
        <HomeIcon />
        <p>HOME</p>
        <WhatshotSharpIcon />
        <SubscriptionsSharpIcon />
      </div>
      <div className="sidebar-middle">
        <LibraryAddCheckSharpIcon />
        <HistoryIcon />
        <VideoLibraryIcon />
        <WatchLaterIcon />
        <ThumbUpAltIcon />
      </div>
      <div className="sidebar-last">
        <h3>Subscription</h3>
      </div> */}
    </div>
  );
}

export default Sidebar;
