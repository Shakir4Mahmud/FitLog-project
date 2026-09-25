"use client";

import { useState } from "react";

export default function SortDropdown({ sortBy, setSortBy }) {
  const [open, setOpen] = useState(false);

  const options = [
    { value: "duration", label: "Duration" },
    { value: "calories", label: "Calories" },
    { value: "rating", label: "Rating" },
  ];

  const selectedLabel = options.find((item) => item.value === sortBy)?.label;

  function handleSelect(value) {
    setSortBy(value);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-40 items-center justify-between rounded-lg border border-gray-700 bg-[#15171c] px-4 py-2 text-sm text-white"
      >
        {selectedLabel}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 rounded-lg border border-gray-700 bg-[#15171c] py-1 shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm ${
                option.value === sortBy
                  ? "bg-[#22252b] text-white"
                  : "text-gray-300 hover:bg-[#1c1e24]"
              }`}
            >
              <span className="w-4">{option.value === sortBy ? "✓" : ""}</span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}