import React, { useState } from "react";

export default function ServiceSimulator({ basePrice, pricePerUnit, unitName }) {
  const [units, setUnits] = useState(1);

  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setUnits(val);
    }
  };

  const totalPrice = basePrice + units * pricePerUnit;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6 border border-pink-300">
      <h3 className="text-xl font-semibold mb-4 text-pink-800">Pricing Simulator</h3>
      <label className="block mb-2 text-pink-700" htmlFor="unitsInput">
        Number of {unitName}:
      </label>
      <input
        id="unitsInput"
        type="number"
        min="1"
        value={units}
        onChange={handleChange}
        className="w-full border border-pink-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <p className="mt-4 text-lg font-bold text-pink-900">
        Total Price: <span>${totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}
