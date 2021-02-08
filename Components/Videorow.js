import React from "react";
import "./Css/videoRow.css";
function Videorow({ views, subs, desc, timestamp, channel, title, image }) {
  return (
    <div className="videoRow">
      <img
        className="video-img"
        src={image}
        alt={channel}
        width="246px"
        height="138px"
      />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} •{" "}
          <span className="videoRow_subs">
            <span className="videoRow_subsNum">{subs}</span>
            Subscribers
          </span>{" "}
          {views} views • {timestamp}
        </p>
        <p className="videoRowDescription">{desc}</p>
      </div>
    </div>
  );
}

export default Videorow;
