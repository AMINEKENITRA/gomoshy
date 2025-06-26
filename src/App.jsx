import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HappyPeopleSection from "./components/HappyPeopleSection";
import CallToAction from "./components/CallToAction";

import Home from "./pages/Home";
import AppCreator from "./pages/AppCreator";
import EmailOutreach from "./pages/EmailOutreach";
import SocialMedia from "./pages/SocialMedia";
import GetAdvice from "./pages/GetAdvice";
import Contact from "./pages/Contact";

const pages = {
  Home,
  "App Creator": AppCreator,
  "Email Outreach": EmailOutreach,
  "Social Media": SocialMedia,
  "Get Advice": GetAdvice,
  Contact,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const PageComponent = pages[activeTab];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff0f6", color: "#ad1457" }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Home" && <HappyPeopleSection />}

      <main style={{ flex: 1 }}>
        <PageComponent />
      </main>

      <CallToAction />

      <Footer />
    </div>
  );
}
