"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header({ title }: { title: string }) {
  const [showNotification, setShowNotification] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const notificationRef: any = useRef();
  const accountRef: any = useRef();
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
    if (accountRef.current && !accountRef.current.contains(e.target)) {
      setShowAccount(false);
    }
  };
  return (
    <>
      <div className="header flex justify-between items-center py-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold capitalize">
          {title}
        </h1>
        <div className="settings flex items-center gap-6">
          {/* <!-- notification  --> */}
          <div className="settings notification " ref={notificationRef}>
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
                    strokeOpacity="0.2"
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
                    strokeOpacity="0.2"
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
                max-w-[300px] min-w-[300px] p-4 shadow-md rounded-md bg-white absolute top-[40px] right-0
              `}
              >
                <div className="notification-card">
                  <div className="notification-card-header border-b border-gray-100">
                    <span className="font-medium text-base">
                      Notification from JoBins
                    </span>
                  </div>

                  <ul
                    className="notification-card-body py-3 max-h-[300px] overflow-y-auto divide-y space-y-1"
                    aria-labelledby="notification list"
                  >
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
                      <Link href="#" className="text-sm block ">
                        The deadline for submitting the completed assignment is
                        next Friday, 2023-06-09
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </li>
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
                      <Link
                        href=" https://forms.gle/LvRBJZnJ1NquxAaaA"
                        target="_blank"
                        className="text-sm block "
                      >
                        To ensure smooth submission, please use the provided
                        Google Form.
                        <span className="underline-offset-4 text-primary">
                          Click here
                        </span>
                      </Link>
                      <time
                        dateTime="2023-06-14 20:00"
                        className="text-xs text-muted"
                      >
                        2023-06-14 at 20:00
                      </time>
                    </li>
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
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
                    </li>
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
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
                    </li>
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
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
                    </li>
                    <li
                      className="notification-card-body-item pt-1"
                      aria-label="notification list item"
                    >
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
                    </li>
                  </ul>

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
          <div className="settings account" ref={accountRef}>
            <div className="relative">
              <div
                aria-label="account dropdown icon"
                aria-expanded={showAccount}
                onClick={() => setShowAccount(!showAccount)}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367F0",
                }}
                className="account-icon  w-[38px] h-[38px] rounded-full relative cursor-pointer"
              >
                <div className="account-status absolute bottom-0 right-0 border-gray-50 border-2 rounded-full">
                  <div className="account-status-online bg-success w-2 h-2  rounded-full"></div>
                  {/* <div className="account-status-offline bg-success border-gray-50 border-2 w-2 h-2 absolute top-0 right-0 rounded-full"></div> */}
                </div>
              </div>
              {/* <!-- account dropdown box --> */}

              <ul
                className={`${
                  showAccount ? "block" : "hidden"
                } account-box absolute z-[1000] top-[40px] right-0 m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white  shadow-md dark:bg-neutral-700 `}
                aria-labelledby="accountDropdownButton"
              >
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                  >
                    <span className="text-base font-medium block">
                      Robert Fox
                    </span>
                    <span className="text-sm font-normal block">
                      robert@gmail.com
                    </span>
                  </Link>
                </li>
                <hr className="my-1 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />

                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="/profile"
                  >
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                  >
                    Preferences
                  </Link>
                </li>
                <hr className="my-1 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
