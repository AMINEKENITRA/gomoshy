import React from "react";
import PricingSimulator from "../components/PricingSimulator";
import { calculateEmailOutreachPrice } from "../services/calculators";

export default function EmailOutreach() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        textAlign: "center",
        backgroundColor: "#f8bbd0",
      }}
    >
      <h2>Email Outreach Manager</h2>
      <img
        src="/assets/email-outreach.png"
        alt="Email Outreach Manager service"
        style={{
          maxWidth: "400px",
          marginBottom: "1rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <PricingSimulator
        calculatePrice={calculateEmailOutreachPrice}
        inputs={[
          { name: "emailsSent", label: "Emails sent per month", min: 1, defaultValue: 1000 },
          { name: "months", label: "Months", min: 1, defaultValue: 1 },
        ]}
      />
    </section>
  );
}
