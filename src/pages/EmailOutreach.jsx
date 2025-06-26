import React from "react";
import ServiceSimulator from "../components/ServiceSimulator";
import VideoAnimation from "../components/VideoAnimation";
import HappyPeopleSection from "../components/HappyPeopleSection";
import emailOutreachVideo from "../assets/videos/email-outreach.mp4";

export default function EmailOutreach() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-pink-900">Email Outreach Manager</h1>
      <VideoAnimation src={emailOutreachVideo} alt="Email Outreach Demo" />
      <ServiceSimulator basePrice={300} pricePerUnit={50} unitName="email campaigns" />
      <HappyPeopleSection />
    </>
  );
}
