import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item active">Introduction</li>
        <li className="sidebar-item">Channels</li>
        <li className="sidebar-item">Settings</li>
        <li className="sidebar-item">Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;
