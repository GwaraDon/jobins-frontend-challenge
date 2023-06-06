import React from "react";

export default function ({ activeState }: { activeState: string }) {
  const activeTab = activeState;
  return (
    <div
      className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[tab-active]:block"
      id={`tabs-${activeTab}`}
      role="tabpanel"
      aria-labelledby={`tabs-${activeTab}`}
      data-tab-active
    >
      {activeTab === "All Order" ? (
        <div className="all-order ">
          <div className="flex items-center md:flex-wrap w-full">
            <div className="user grow">
              <div className="grid grid-auto-column-three xl:divide-x divide-x-0 xl:gap-0 gap-3">
                <div className="user-info sm:pl-6 flex items-center">
                  <div className="flex items-center">
                    <div
                      className="user-img rounded-full sm:w-[72px] w-[48px] sm:h-[72px] h-[48px] overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367F0",
                        border: "7px solid #7367F0 ",
                      }}
                    >
                      <span></span>
                    </div>
                    <div className="sm:ml-4 ml-2">
                      <div className="user-name font-semibold sm:text-lg ">
                        Robert Fox
                      </div>
                      <div className="user-email text-muted sm:text-base text-sm ">
                        robert@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-info sm:pl-6  ">
                  <div className="title text-muted font-medium text-sm uppercase mb-4">
                    PERSONAL INFORMATION
                  </div>
                  <table className="text-left text-sm">
                    <tbody>
                      <tr>
                        <th className="pr-4 pb-4"> Contact Number</th>
                        <td className="pb-4">(201) 555-0124 1</td>
                      </tr>
                      <tr>
                        <th className="pr-4 pb-4">Date of Birth</th>
                        <td className="pb-4"> Jan, 1985 </td>
                      </tr>
                      <tr>
                        <th className="pr-4 pb-4">Member Since</th>
                        <td className="pb-4">3 March, 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="sm:pl-6 ">
                  <div className="user-address  ">
                    <div className="title text-muted font-medium text-sm uppercase mb-4">
                      Shipping Address
                    </div>
                    <address className="text-sm mb-6 not-italic">
                      3517 W. Gray St. Utica, Pennsylvania 57867
                    </address>
                  </div>
                  <div className="user-status flex items-center justify-between flex-wrap">
                    <div className="status-box total-order">
                      <div className="status-box-number font-bold sm:text-2xl text-xl">
                        150
                      </div>
                      <div className="status-box-text text-muted font-medium sm:text-sm text-xs capitalize">
                        Total order
                      </div>
                    </div>
                    <div className="status-box completed">
                      <div className="status-box-number font-bold sm:text-2xl text-xl">
                        140
                      </div>
                      <div className="status-box-text text-muted font-medium sm:text-sm text-xs capitalize">
                        Completed
                      </div>
                    </div>
                    <div className="status-box cancelled">
                      <div className="status-box-number font-bold sm:text-2xl text-xl">
                        10
                      </div>
                      <div className="status-box-text text-muted font-medium sm:text-sm text-xs capitalize">
                        cancelled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        activeTab
      )}
    </div>
  );
}
