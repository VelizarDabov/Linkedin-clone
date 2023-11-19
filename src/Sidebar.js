import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
    const recentItems = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
<p>{topic}</p>
            
        </div>
   )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src='https://creatella.ventures/wp-content/uploads/2021/10/photo-1579546929518-9e396f3cc809.jpg' alt="sidebarImg" />
        <Avatar className="sidebar__avatar" />
        <h2>Velizar Dabov</h2>
        <h4>velizardabov@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber"> 2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber"> 2,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('programming')}
        {recentItems('softwareengineering')}
        {recentItems('design')}
        {recentItems('developer')}

      </div>
    </div>
  );
};

export default Sidebar;
