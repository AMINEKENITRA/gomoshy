import React from "react";
import PricingSimulator from "../components/PricingSimulator";
import { calculateAppCreatorPrice } from "../services/calculators";

export default function AppCreator() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        textAlign: "center",
        backgroundColor: "#f8bbd0",
      }}
    >
      <h2>App Creator</h2>
      <img
        src="/assets/app-creator.png"
        alt="App Creator service"
        style={{
          maxWidth: "400px",
          marginBottom: "1rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <PricingSimulator
        calculatePrice={calculateAppCreatorPrice}
        inputs={[
          { name: "users", label: "Number of users", min: 1, defaultValue: 1 },
          { name: "months", label: "Months", min: 1, defaultValue: 1 },
        ]}
      />
    </section>
  );
}
