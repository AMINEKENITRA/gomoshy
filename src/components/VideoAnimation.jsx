import React from "react";

export default function VideoAnimation({ src, alt }) {
  return (
    <div className="my-6 max-w-xl mx-auto rounded overflow-hidden shadow-lg border border-pink-300">
      <video controls loop muted playsInline className="w-full h-auto">
        <source src={src} type="video/mp4" />
        {alt && <track kind="descriptions" />}
        Sorry, your browser does not support the video tag.
      </video>
    </div>
  );
}
