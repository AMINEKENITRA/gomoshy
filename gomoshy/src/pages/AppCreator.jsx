import React from "react";
import ServiceSimulator from "../components/ServiceSimulator";
import VideoAnimation from "../components/VideoAnimation";
import HappyPeopleSection from "../components/HappyPeopleSection";
import appCreatorVideo from "../assets/videos/app-creator.mp4";

export default function AppCreator() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-pink-900">App Creator</h1>
      <VideoAnimation src={appCreatorVideo} alt="App Creator Demo" />
      <ServiceSimulator basePrice={500} pricePerUnit={100} unitName="features" />
      <HappyPeopleSection />
    </>
  );
}
