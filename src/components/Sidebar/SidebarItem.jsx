import React from "react";
import "./Sidebar.css";

const SidebarItem = ({ label, icon }) => {
  return (
    <div className="sidebar-item">
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-label">{label}</span>
    </div>
  );
};

export default SidebarItem;