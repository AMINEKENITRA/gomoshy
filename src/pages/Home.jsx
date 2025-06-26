import React from "react";
import BrandVideo from "../components/BrandVideo";
import HappyPeopleSection from "../components/HappyPeopleSection";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center text-pink-900">
        Welcome to Gomoshy
      </h1>
      <BrandVideo />
      <HappyPeopleSection />
    </>
  );
}
