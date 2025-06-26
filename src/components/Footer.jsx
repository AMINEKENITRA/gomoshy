import React from "react";

const darkPink = "#ad1457";
const lightPink = "#f8bbd0";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: darkPink,
        color: "white",
        padding: "1rem 2rem",
        textAlign: "center",
        fontSize: "0.9rem",
        marginTop: "auto",
      }}
    >
      <p>© 2025 Gomoshy. All rights reserved.</p>
      <p>
        <a href="#top" style={{ color: lightPink, textDecoration: "none" }}>
          Back to top
        </a>
      </p>
    </footer>
  );
}
