import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#e91e63",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Gomoshy
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Launch and manage your dream business with ease.
        </p>
      </section>

      {/* Company Video Section */}
      <section
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h2>About Our Company</h2>
        <img
          src="/assets/company-video.png"
          alt="Company video preview"
          style={{
            maxWidth: "90%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
        {/* Replace this img with a real video component if needed */}
      </section>
    </>
  );
}
