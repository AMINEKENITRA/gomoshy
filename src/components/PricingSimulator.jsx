import React, { useState } from "react";

export default function PricingSimulator({ calculatePrice, inputs }) {
  const initialState = {};
  inputs.forEach((input) => {
    initialState[input.name] = input.defaultValue || 1;
  });

  const [values, setValues] = useState(initialState);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const price = calculatePrice(...inputs.map((i) => values[i.name]));

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {inputs.map(({ name, label, min }) => (
        <label key={name} style={{ display: "block", marginBottom: "1rem" }}>
          {label}:
          <input
            type="number"
            min={min || 0}
            value={values[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            style={{ marginLeft: "1rem", width: "60px", padding: "0.3rem" }}
          />
        </label>
      ))}
      <div
        style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "1rem" }}
      >
        Total Price: ${price.toFixed(2)}
      </div>
    </div>
  );
}
