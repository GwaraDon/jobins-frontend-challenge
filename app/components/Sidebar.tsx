"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <aside
        className={` ${
          toggle ? "close-sidebar  " : " "
        } sidebar transition-all duration-300  z-20 flex  flex-col justify-start max-h-screen sticky top-0  border-e    `}
      >
        <div className="logo-section px-4 py-5 relative flex items-center justify-between">
          <Link
            href="/main-menu/dashboard"
            className="flex items-center"
            title="Logo"
          >
            <Image src="/logo.png" width={28} height={24} alt="logo_image" />
            <span className="font-bold text-xl ml-2.5"> JoBins</span>
          </Link>
          <button
            title="Toggle Sidebar"
            className={`${
              toggle ? "rotate-180" : ""
            } transition-transform delay-100  z-[999]`}
            onClick={() => setToggle(!toggle)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6H13"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12H11"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 18H13"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8L4 12L8 16"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="main_nav">
          <div className="px-8 py-4">
            <p className="capitalize text-gray-400 text-sm">Main Menu</p>
          </div>
          <nav aria-label="Main Nav" className="flex flex-col gap-2 px-4">
            <Link
              href="/main-menu/dashboard"
              data-toggle="tooltip"
              title="Dashboard"
              className={`${
                pathname.startsWith("/main-menu/dashboard") ? "active-link" : ""
              } flex items-center gap-2 rounded-lg  px-5 py-2.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:font-bold [&.active-link]:bg-gray-100 [&.active-link]:text-gray-900 [&.active-link]:font-bold`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4167 7.98416L12.5281 4.18183C11.6456 3.49522 10.4095 3.49522 9.52696 4.18183L4.63746 7.98416C4.042 8.44723 3.69386 9.15941 3.69421 9.91374V16.5137C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5137V9.91374C18.3609 9.15933 18.0125 8.44708 17.4167 7.98416"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 13.7499C12.6408 14.9718 9.35731 14.9718 7.33331 13.7499"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-normal"> Dashboard </span>
            </Link>
            <Link
              href="/main-menu/order-management"
              title="Order Management"
              className={`${
                pathname.startsWith("/main-menu/order-management")
                  ? "active-link"
                  : ""
              } flex items-center gap-2 rounded-lg  px-5 py-2.5  text-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:font-bold [&.active-link]:bg-gray-100 [&.active-link]:text-gray-900 [&.active-link]:font-bold`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="5.50002"
                  cy="17.4167"
                  rx="1.83333"
                  ry="1.83333"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="5.50002"
                  cy="17.4167"
                  rx="1.83333"
                  ry="1.83333"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="15.5833"
                  cy="17.4167"
                  rx="1.83333"
                  ry="1.83333"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="15.5833"
                  cy="17.4167"
                  rx="1.83333"
                  ry="1.83333"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5834 15.5833H5.50002V2.75H3.66669"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5834 15.5833H5.50002V2.75H3.66669"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-normal"> Order Management </span>
            </Link>
            <Link
              href="/main-menu/brand"
              title="Brand"
              className={`${
                pathname.startsWith("/main-menu/brand") ? "active-link" : ""
              } flex items-center gap-2 rounded-lg  px-5 py-2.5  text-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:font-bold [&.active-link]:bg-gray-100 [&.active-link]:text-gray-900 [&.active-link]:font-bold`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0001 16.2707L5.34243 19.2453L6.42318 12.9451L1.83984 8.48367L8.16484 7.567L10.9937 1.83508L13.8225 7.567L20.1475 8.48367L15.5642 12.9451L16.6449 19.2453L11.0001 16.2707Z"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0001 16.2707L5.34243 19.2453L6.42318 12.9451L1.83984 8.48367L8.16484 7.567L10.9937 1.83508L13.8225 7.567L20.1475 8.48367L15.5642 12.9451L16.6449 19.2453L11.0001 16.2707Z"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-normal"> Brand </span>
            </Link>
          </nav>
        </div>
        <div className="product_nav">
          <div className="px-8 py-4">
            <p className="capitalize text-gray-400 text-sm">Product Page</p>
          </div>
          <nav aria-label="Main Nav" className="flex flex-col gap-2 px-4">
            <Link
              href="/product/add-product"
              title="Add Product"
              className={`${
                pathname.startsWith("/product/add-product") ? "active-link" : ""
              } flex items-center gap-2 rounded-lg  px-5 py-2.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:font-bold`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 11H13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 11H13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8.25V13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8.25V13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-normal"> Add product </span>
            </Link>
            <Link
              href="/product/product-list"
              title="Product Lista"
              className={`${
                pathname.startsWith("/product/product-list")
                  ? "active-link"
                  : ""
              } flex items-center gap-2 rounded-lg  px-5 py-2.5  text-gray-400 hover:bg-gray-100 hover:text-gray-900 hover:font-bold
            `}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L18.3333 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L18.3333 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11V19.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11V19.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L3.66669 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L3.66669 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-normal"> Product List </span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
