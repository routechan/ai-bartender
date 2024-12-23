import React from "react";

const Taste = ({ handleTasteChange }) => {
  return (
    <div className="mt-6">
      <label
        htmlFor="taste"
        className="text-xl font-semibold block
  "
      >
        味わい
      </label>
      <div className="mt-2">
        <div className="flex justify-between">
          <span className="text-sm">甘</span>
          <span className="text-sm">辛</span>
        </div>
        <input
          onChange={(e) => handleTasteChange(e.target.value)}
          id="taste"
          type="range"
          min="0"
          max="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:w-4
      [&::-webkit-slider-thumb]:h-4
      [&::-webkit-slider-thumb]:bg-orange-400
      [&::-webkit-slider-thumb]:rounded-full
      [&::-moz-range-thumb]:w-4
      [&::-moz-range-thumb]:h-4
      [&::-moz-range-thumb]:bg-orange-400
      [&::-moz-range-thumb]:rounded-full
      [&::-moz-range-thumb]:border-0
    "
        />
      </div>
    </div>
  );
};

export default Taste;
