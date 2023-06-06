import Link from "next/link";
import React from "react";
function Pagination() {
  return (
    <nav className={`navigation p-4`}>
      <ul className="list-style-none flex">
        <li>
          <Link
            href="#"
            aria-label="Previous"
            className="pointer-events-none relative block rounded bg-transparent ml-1 px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4L6 8L10 12"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="relative block rounded bg-primary ml-1 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            className="relative block rounded bg-neutral-100 ml-1 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300  hover:bg-primary hover:text-white"
            href="#"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            className="relative block rounded bg-neutral-100 ml-1 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-primary  hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            aria-label="Next"
            className="relative block rounded bg-neutral-100 ml-1 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-primary  hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
