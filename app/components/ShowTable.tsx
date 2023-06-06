import React from "react";

export default function ShowTable() {
  return (
    <>
      <div className="flex items-center">
        <span className="text-muted font-medium mr-2">Showing</span>
        <div className="relative inline-flex  items-center">
          <svg
            className="w-4 h-4 absolute  right-[.75rem] pointer-events-none"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L10 13L15 8"
              stroke="#8B909A"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <select
            className="bg-white pl-4 pr-8 py-2 border-[#E9E7FD] border  outline-none rounded focus:outline-none appearance-none"
            name="select-box"
          >
            {["10", "20", "50", "100"].map((opt, index) => (
              <option value={opt} key={index}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <span className="text-muted font-medium ml-2">of {50}</span>
      </div>
    </>
  );
}
