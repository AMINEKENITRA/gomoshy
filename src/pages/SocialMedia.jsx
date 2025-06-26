import React from "react";
import PricingSimulator from "../components/PricingSimulator";
import { calculateSocialMediaPrice } from "../services/calculators";

export default function SocialMedia() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        textAlign: "center",
        backgroundColor: "#f8bbd0",
      }}
    >
      <h2>Social Media Post Manager</h2>
      <img
        src="/assets/social-media.png"
        alt="Social Media Post Manager service"
        style={{
          maxWidth: "400px",
          marginBottom: "1rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <PricingSimulator
        calculatePrice={calculateSocialMediaPrice}
        inputs={[
          { name: "posts", label: "Number of posts per month", min: 1, defaultValue: 10 },
          { name: "months", label: "Months", min: 1, defaultValue: 1 },
        ]}
      />
    </section>
  );
}
