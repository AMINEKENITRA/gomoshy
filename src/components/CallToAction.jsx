import React from "react";

const pink = "#e91e63";
const darkPink = "#ad1457";

export default function CallToAction() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        backgroundColor: pink,
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>Ready to Launch Your Dream Business?</h2>
      <button
        style={{
          backgroundColor: darkPink,
          color: "white",
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem",
          marginTop: "1rem",
        }}
        onClick={() => alert("Contact Us clicked!")}
      >
        Contact Us Now
      </button>
    </section>
  );
}
