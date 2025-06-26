import React from "react";
import ServiceSimulator from "../components/ServiceSimulator";
import VideoAnimation from "../components/VideoAnimation";
import HappyPeopleSection from "../components/HappyPeopleSection";
import socialMediaVideo from "../assets/videos/social-media.mp4";

export default function SocialMedia() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-pink-900">Social Media Post Manager</h1>
      <VideoAnimation src={socialMediaVideo} alt="Social Media Demo" />
      <ServiceSimulator basePrice={200} pricePerUnit={40} unitName="posts" />
      <HappyPeopleSection />
    </>
  );
}
