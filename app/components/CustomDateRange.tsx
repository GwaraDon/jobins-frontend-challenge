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
    <div>
      <div className="form-group mb-0 relative">
        <div className="relative">
          <input
            readOnly
            type="text"
            className=" block min-h-[auto] w-full rounded border-0 bg-white px-4 py-3  outline-none transition-all duration-200 ease-linear"
            placeholder="Filter by date range"
            onClick={() => setDateOpen((dateOpen: any) => !dateOpen)}
            value={formatDate(state)}
          />
        </div>
        {dateOpen && (
          <div className="absolute top-100 end-0  p-3 rounded drop-shadow-md">
            <DateRange
              editableDateInputs={true}
              onChange={(item: any) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        )}
      </div>
    </div>
  );
}
