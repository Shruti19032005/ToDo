import React from "react";
import SidebarItem from "./SidebarItem";



const Sidebar = () => {
  const menuItems = [
    { id: 1, label: "Today", icon: "📅" },
    { id: 2, label: "Important", icon: "⭐" },
    { id: 3, label: "Planned", icon: "🗓️" },
    { id: 4, label: "Assigned to Me", icon: "👤" },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#ededf5",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >
      {/* Sidebar Heading */}
      <h2 style={{ textAlign: "center", color: "black", marginBottom: "20px" }}>
        To-Do
      </h2>

      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src="data:image/png;base64,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"
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "3px solid #34354a",
            marginBottom: "10px",
          }}
        />
        <h3 style={{ color: "black" }}>QuadB Tech</h3>
      </div>

      {/* Sidebar Menu */}
      <div style={{ marginBottom: "20px" }}>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "black",
              gap: "10px",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Pie Chart */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "conic-gradient(#4caf50 75%, #ededf5 75%)",
          margin: "20px auto 10px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#ededf5",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "18px",
          }}
        >
          <span>75%</span>
        </div>
      </div>

      {/* Task Completion Text */}
      <p
        style={{
          textAlign: "center",
          color: "black",
          marginTop: "10px",
          fontSize: "16px",
        }}
      >
        Today Tasks 
      </p>
    </div>
  );
};

export default Sidebar;
