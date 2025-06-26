import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pink-200 text-pink-700 text-center py-4 mt-12">
      <p>© {new Date().getFullYear()} Gomoshy. All rights reserved.</p>
    </footer>
  );
}
