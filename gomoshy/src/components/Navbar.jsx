import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/app-creator", label: "App Creator" },
  { to: "/email-outreach", label: "Email Outreach" },
  { to: "/social-media", label: "Social Media" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-pink-700">Gomoshy</div>
        <ul className="flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-900 font-semibold border-b-2 border-pink-700"
                    : "text-pink-700 hover:text-pink-900"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
