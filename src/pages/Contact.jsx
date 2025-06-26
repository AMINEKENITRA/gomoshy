import React from "react";

export default function Contact() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-pink-900">Contact Us</h1>
      <p className="mb-4 max-w-xl">
        For inquiries, please email us at{" "}
        <a href="mailto:contact@gomoshy.com" className="text-pink-700 underline">
          contact@gomoshy.com
        </a>
        .
      </p>
      <form className="max-w-xl bg-white p-6 rounded shadow border border-pink-300">
        <label htmlFor="name" className="block mb-1 text-pink-700 font-semibold">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-pink-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Your Name"
        />
        <label htmlFor="email" className="block mb-1 text-pink-700 font-semibold">
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-pink-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="you@example.com"
        />
        <label htmlFor="message" className="block mb-1 text-pink-700 font-semibold">
          Message:
        </label>
        <textarea
          id="message"
          rows="4"
          className="w-full border border-pink-400 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Your message here..."
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
        >
          Send
        </button>
      </form>
    </>
  );
}
