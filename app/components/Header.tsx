"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header({ title }: { title: string }) {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef: any = useRef();
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  const hideOnClickOutside = (e: Event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setShowNotification(false);
    }
  };
  return (
    <>
      <div className="header flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
        <div className="settings flex items-center gap-6" ref={notificationRef}>
          {/* <!-- notification  --> */}
          <div className="settings notification ">
            <div
              className="relative w-[30px] h-[38px] cursor-pointer flex items-center"
              onClick={() => setShowNotification(!showNotification)}
            >
              <span className="notification-icon">
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2742 5.41667C11.2742 4.22005 12.2442 3.25 13.4408 3.25C14.6375 3.25 15.6075 4.22005 15.6075 5.41667C18.1427 6.61543 19.8094 9.11543 19.9408 11.9167V15.1667C20.1062 16.5325 20.9103 17.7387 22.1075 18.4167H4.77417C5.97138 17.7387 6.7755 16.5325 6.94084 15.1667V11.9167C7.07232 9.11543 8.73899 6.61543 11.2742 5.41667"
                    stroke="#4B465C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2742 5.41667C11.2742 4.22005 12.2442 3.25 13.4408 3.25C14.6375 3.25 15.6075 4.22005 15.6075 5.41667C18.1427 6.61543 19.8094 9.11543 19.9408 11.9167V15.1667C20.1062 16.5325 20.9103 17.7387 22.1075 18.4167H4.77417C5.97138 17.7387 6.7755 16.5325 6.94084 15.1667V11.9167C7.07232 9.11543 8.73899 6.61543 11.2742 5.41667"
                    stroke="white"
                    stroke-opacity="0.2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.1908 18.4166V19.5C10.1908 21.2949 11.6459 22.75 13.4408 22.75C15.2357 22.75 16.6908 21.2949 16.6908 19.5V18.4166"
                    stroke="#4B465C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.1908 18.4166V19.5C10.1908 21.2949 11.6459 22.75 13.4408 22.75C15.2357 22.75 16.6908 21.2949 16.6908 19.5V18.4166"
                    stroke="white"
                    stroke-opacity="0.2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="notification-count absolute top-[-.125rem] right-[-.125rem]">
                <span className="notification-count-number bg-danger text-white p-1 rounded-full text-xs w-[18px] h-[18px] flex items-center justify-center">
                  3
                </span>
              </div>
              {/* <!-- notification box --> */}
              <div
                aria-label="notification box"
                data-dropdown-show={showNotification}
                className={`${showNotification ? "block" : "hidden"}
                notification-box transition-all duration-300 ease-in-out 
                max-w-[300px] min-w-[300px] p-4 shadow-md rounded-md bg-white absolute top-[50px] right-0
              `}
              >
                <div className="notification-card">
                  <div className="notification-card-header border-b border-gray-100">
                    <span className="font-medium text-base">
                      Notification from ....
                    </span>
                  </div>

                  <div className="notification-card-body py-3 max-h-[300px] overflow-y-auto divide-y space-y-1 ">
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                    <div className="notification-card-body-item pt-1">
                      <Link href="#" className="text-sm block ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora, minima.
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </div>
                  </div>

                  <div className="notification-card-footer border-t border-gray-100 ">
                    <button className="bg-transparent text-gray-500 text-sm border-0 outline-none pt-2 px-4 mx-auto  w-full text-center block ">
                      Show All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- account icon --> */}
          <div className="settings account">
            <div className="relative">
              <div
                aria-label="account dropdown icon"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367F0",
                }}
                className="account-icon  w-[38px] h-[38px] rounded-full relative"
              >
                <div className="account-status absolute bottom-0 right-0 border-gray-50 border-2 rounded-full">
                  <div className="account-status-online bg-success w-2 h-2  rounded-full"></div>
                  {/* <div className="account-status-offline bg-success border-gray-50 border-2 w-2 h-2 absolute top-0 right-0 rounded-full"></div> */}
                </div>
              </div>
              {/* <!-- account dropdown box --> */}
              <div className="account-box hidden">
                <div className="account-box-header">
                  <span>Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
