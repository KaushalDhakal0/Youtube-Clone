import React from "react";
import "./Css/video-css.css";
import Avatar from "@material-ui/core/Avatar";
function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="main_card">
      <img
        className="video_thumbnail"
        src={image}
        alt="thumbnail"
        // height="160px"
        // width="200px"
      />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="video_text">
          <h4>{title}</h4>
          <h5>{channel}</h5>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
