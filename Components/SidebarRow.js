import React from "react";
import "./Css/sidebar-row.css";
function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebar_row ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h3 className="sidebarRow_title">{title}</h3>
    </div>
  );
}

export default SidebarRow;
