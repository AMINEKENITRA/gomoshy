import React, { useState } from "react";

export default function GetAdvice() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate submit
    setSubmitted(true);
  };

  return (
    <section style={{ padding: "3rem 2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Get Advice</h2>
      {submitted ? (
        <p>Thanks for your question! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Your Email:
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Your Question:
            <textarea
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ width: "100%", height: "100px", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#ad1457",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
