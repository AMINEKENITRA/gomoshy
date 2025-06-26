import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AppCreator from "./pages/AppCreator";
import EmailOutreach from "./pages/EmailOutreach";
import SocialMedia from "./pages/SocialMedia";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-pink-50 text-pink-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app-creator" element={<AppCreator />} />
            <Route path="/email-outreach" element={<EmailOutreach />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
