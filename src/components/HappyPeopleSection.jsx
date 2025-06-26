import React from "react";

export default function HappyPeopleSection() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Our Happy Clients</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/assets/happy-people1.png"
          alt="Happy people #1"
          style={{ width: "300px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        />
        <img
          src="/assets/happy-people2.png"
          alt="Happy people #2"
          style={{ width: "300px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        />
      </div>
    </section>
  );
}
