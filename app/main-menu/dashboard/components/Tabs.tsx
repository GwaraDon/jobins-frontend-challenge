"use client";
import Link from "next/link";
import React, { useState } from "react";
import TabContent from "./TabContent";
const tabs = ["All Order", "Completed ", "Cancelled ", "Pending "];
export default function Tabs({ activeState }: { activeState: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="flex flex-col-reverse w-full">
      <ul
        className="-mb-6 flex list-none flex-row flex-nowrap border-b-0 pl-0 snap-x  overflow-x-auto"
        role="tablist"
        data-te-nav-ref
      >
        {tabs.map((tab, index) => (
          <li
            role="presentation"
            className="text-center snap-start"
            key={index}
          >
            <span
              className="mt-2 block whitespace-nowrap border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase  text-muted hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent aria-selected:border-primary aria-selected:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:aria-selected:border-primary-400 dark:aria-selected:text-primary-400"
              role="tab"
              aria-controls={`tabs-${tab}`}
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          </li>
        ))}
      </ul>

      {/* <!--Tabs content--> */}
      <div className="mb-6">
        <TabContent activeState={activeTab} />
      </div>
    </div>
  );
}
