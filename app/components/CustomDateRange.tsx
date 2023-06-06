"use client";
import { useState } from "react";
import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
export default function CustomDateRange() {
  const [dateOpen, setDateOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      colors: "#0F60FF",
    },
  ]);
  const parseDate = (date: any) => {
    if (typeof date === "string") {
      if (date.length <= 10) {
        date = date.replace(/\./g, "-");
      }

      return format(new Date(date), "MM/dd/yy");
    }
  };

  const formatDate = (date: any) => {
    const fromDate = parseDate(String(date[0].startDate));
    const toDate = parseDate(String(date[0].endDate));
    return `${fromDate} - ${toDate}`;
  };

  return (
    <div className="form-group mb-0 relative sm:max-w-[200px] max-w-full w-full">
      <div className="relative inline-flex  items-center  w-full">
        <input
          readOnly
          type="text"
          className=" block min-h-[auto] w-full rounded border-0 bg-white px-4 py-3  outline-none transition-all duration-200 ease-linear"
          placeholder="Filter by date range"
          onClick={() => setDateOpen((dateOpen: any) => !dateOpen)}
          value={formatDate(state)}
        />
        <button
          type="button"
          className="absolute right-[.75rem]"
          onClick={() => setDateOpen((dateOpen: any) => !dateOpen)}
        >
          <svg
            className={`w-4 h-4  pointer-events-none transition-transform ${
              dateOpen ? "rotate-180" : ""
            }`}
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
        </button>
      </div>
      {dateOpen && (
        <div className="absolute top-100 end-0  bg-white dark:bg-slate-400 rounded drop-shadow-md">
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      )}
    </div>
  );
}
