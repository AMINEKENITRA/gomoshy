import React from "react";

const pink = "#e91e63";
const lightPink = "#f8bbd0";
const darkPink = "#ad1457";

const tabs = [
  "Home",
  "App Creator",
  "Email Outreach",
  "Social Media",
  "Get Advice",
  "Contact",
];

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav
      style={{
        backgroundColor: pink,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white", cursor: "default" }}>
        Gomoshy
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
        }}
      >
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: "pointer",
              color: activeTab === tab ? darkPink : "white",
              backgroundColor: activeTab === tab ? lightPink : "transparent",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              fontWeight: activeTab === tab ? "bold" : "normal",
              transition: "all 0.3s ease",
              userSelect: "none",
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}
