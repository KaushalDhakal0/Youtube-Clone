import React from "react";
import "./Css/searchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./Videorow";
function SearchComp() {
  return (
    <div className="search_page">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h4 className="filter-text">FILTER</h4>
      </div>
      <hr />
      <ChannelRow
        verified={true}
        imgSrc="https://avatars.githubusercontent.com/u/50737484?s=400&u=438d6468f151774952e2c5892f966c398d644194&v=4"
        ChannelName="Mr. Beast"
        subs="50M"
        noOfVideos="590"
        desc="You can visit this channel and be amazed by our level of giving entartainment.Click the subscribe button if u want to get notification click the bell icon too"
      />
      <hr />
      <VideoRow
        views="1M"
        channel="Big Bang Theory"
        subs="509K"
        desc="Needless to say, a description like this doesn’t give YouTube much information about your video. And if YouTube doesn’t understand your video, they’re not likely to rank it in search."
        timestamp="8 minutes ago"
        title="What if Sun disappeared"
        image="http://i3.ytimg.com/vi/l3QQQu7QLoM/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        channel="Planet Earth"
        subs="259K"
        desc="Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and"
        timestamp="5 minute ago"
        title="Home Planet"
        image="http://i3.ytimg.com/vi/HCDVN7DCzYE/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        channel="Chemical Reaction"
        subs="7M"
        desc="Needless to say, a description like this doesn’t give YouTube much information about your video. And if YouTube doesn’t understand your video, they’re not likely to rank it in search."
        timestamp="5hr ago"
        title="Molecular Structure of Organic compounds."
        image="http://i3.ytimg.com/vi/rW75KSj-kMM/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        channel="Hunter"
        subs="50M"
        desc="Needless to say, a description like this doesn’t give YouTube much information about your video. And if YouTube doesn’t understand your video, they’re not likely to rank it in search."
        timestamp="5hr ago"
        title="Advanced Javascript"
        image="http://i3.ytimg.com/vi/EI7sN1dDwcY/maxresdefault.jpg"
      />
      s
    </div>
  );
}

export default SearchComp;
