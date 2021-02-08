import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Css/Channel.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
function ChannelRow({ verified, ChannelName, subs, noOfVideos, desc, imgSrc }) {
  return (
    <div className="channel_main">
      <Avatar className="avatar-channel" src={imgSrc} alt={ChannelName} />
      <div className="text_container">
        <h4>
          {ChannelName} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
