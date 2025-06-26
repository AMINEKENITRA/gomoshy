import React from "react";
import happyPeopleImg from "../assets/videos/pictures/happy-people.jpg";

export default function HappyPeopleSection() {
  return (
    <section className="my-12 text-center">
      <img
        src={happyPeopleImg}
        alt="Happy people smiling"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
      <p className="mt-4 text-pink-800 font-semibold">
        Join the happy entrepreneurs who trust Gomoshy to launch their dreams!
      </p>
    </section>
  );
}
