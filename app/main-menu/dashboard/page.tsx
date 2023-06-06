import Image from "next/image";
import Header from "../../components/Header";
import Sales from "../../../public/images/business-and-finance 1.png";
import Profit from "../../../public/images/yen 1.png";
import Brazil from "public//images/BR.png";
import Aus from "public//images/AS.png";
import US from "public//images/US.png";
import { data } from "../../../mock/data";
import Link from "next/link";
import Table from "./components/Table";
import Tabs from "./components/Tabs";
import Searchbox from "./components/Searchbox";
import CustomDateRange from "@/app/components/CustomDateRange";

export default async function Dashboard() {
  const userlist: any = data;
  const title = "dashboard";

  // const dateRef: any = useRef();
  // useEffect(() => {
  //   document.addEventListener("click", hideOnClickOutside, true);
  // }, []);
  // const hideOnClickOutside = (e: Event) => {
  //   if (dateRef.current && !dateRef.current.contains(e.target)) {
  //     setDateOpen(false);
  //   }
  // };

  return (
    <div className="dashboard py-2 px-5 bg-neutral-100  grow  overflow-auto z-10">
      <Header title={title}></Header>
      <section className="dashbord ">
        <div className="grid grid-column items-center  w-full gap-3 mb-4">
          {/* <!-- total sales box  max-w-[398px]--> */}
          <div className=" total-sales h-full  card  items-center  bg-white ">
            <div className="grow-0">
              <Image src={Sales} width={73} height={73} alt="sales " />
            </div>
            <div className="divider mx-8 bg-gray-100 w-[2px] h-[140px]"></div>
            <div>
              <div className="card-title">
                <p className="text-lg font-semibold">Total Sales & Costs</p>
                <small className="text-muted text-sm">Last 7 days</small>
              </div>
              <div className="card-body pt-7">
                <div className="price font-bold text-xl">$350K</div>
                <div className="text-sm flex items-center">
                  <small className="text-success mr-2 flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                    >
                      <path
                        d="M7.99998 2.95004C8.08887 2.95004 8.17221 2.96382 8.24998 2.99137C8.32776 3.01893 8.39998 3.06626 8.46665 3.13337L12.8667 7.53337C13 7.66671 13.0667 7.82493 13.0667 8.00804C13.0667 8.19115 13 8.3496 12.8667 8.48337C12.7333 8.61671 12.5778 8.68337 12.4 8.68337C12.2222 8.68337 12.0667 8.61671 11.9333 8.48337L8.66665 5.21671L8.66665 12.6834C8.66665 12.8723 8.60265 13.0278 8.47465 13.15C8.34665 13.2723 8.18843 13.3334 7.99998 13.3334C7.81109 13.3334 7.65265 13.2694 7.52465 13.1414C7.39665 13.0134 7.33287 12.8552 7.33332 12.6667L7.33332 5.21671L4.06665 8.48337C3.93332 8.61671 3.77776 8.68337 3.59998 8.68337C3.42221 8.68337 3.26665 8.61671 3.13332 8.48337C2.99998 8.35004 2.93332 8.1916 2.93332 8.00804C2.93332 7.82448 2.99998 7.66626 3.13332 7.53337L7.53332 3.13337C7.59998 3.06671 7.67221 3.01937 7.74998 2.99137C7.82776 2.96337 7.9111 2.9496 7.99998 2.95004Z"
                        fill="#1EB564"
                      />
                    </svg>
                    <span className="inline ml-1"> 8.56K</span>{" "}
                  </small>
                  <small className="text-muted ">vs last 7 days</small>
                </div>
              </div>
            </div>
          </div>
          {/* total profit max-w-[242px] */}
          <div className="total-profit  h-full  card  flex-col  bg-white ">
            <div className="flex items-center">
              <Image src={Profit} width={43} height={43} alt="sales " />

              <div className="card-title ml-6">
                <p className="text-lg font-semibold">Total Profit</p>
                <small className="text-muted text-sm">Last 7 days</small>
              </div>
            </div>
            <div className="card-body pt-7">
              <div className="price font-bold text-xl">$50K</div>
              <div className="text-sm flex items-center">
                <small className="text-success mr-2 flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                  >
                    <path
                      d="M7.99998 2.95004C8.08887 2.95004 8.17221 2.96382 8.24998 2.99137C8.32776 3.01893 8.39998 3.06626 8.46665 3.13337L12.8667 7.53337C13 7.66671 13.0667 7.82493 13.0667 8.00804C13.0667 8.19115 13 8.3496 12.8667 8.48337C12.7333 8.61671 12.5778 8.68337 12.4 8.68337C12.2222 8.68337 12.0667 8.61671 11.9333 8.48337L8.66665 5.21671L8.66665 12.6834C8.66665 12.8723 8.60265 13.0278 8.47465 13.15C8.34665 13.2723 8.18843 13.3334 7.99998 13.3334C7.81109 13.3334 7.65265 13.2694 7.52465 13.1414C7.39665 13.0134 7.33287 12.8552 7.33332 12.6667L7.33332 5.21671L4.06665 8.48337C3.93332 8.61671 3.77776 8.68337 3.59998 8.68337C3.42221 8.68337 3.26665 8.61671 3.13332 8.48337C2.99998 8.35004 2.93332 8.1916 2.93332 8.00804C2.93332 7.82448 2.99998 7.66626 3.13332 7.53337L7.53332 3.13337C7.59998 3.06671 7.67221 3.01937 7.74998 2.99137C7.82776 2.96337 7.9111 2.9496 7.99998 2.95004Z"
                      fill="#1EB564"
                    />
                  </svg>
                  <span className="inline ml-1"> 12%</span>
                </small>
                <small className="text-muted ">vs last 7 days</small>
              </div>
            </div>
          </div>
          {/* Top country max-w-[452px]*/}
          <div className="top-country   h-full card bg-white flex-col">
            <div className="grid grid-custom items-center flex-nowrap gap-4 mb-4">
              <Image src={US} width={34} height={73} alt="sales " />
              <div className="collection">
                <div className="text-base font-semibold">$30k</div>

                <div className="text-muted text-xs">United States</div>
              </div>
              <div className="progress-bar w-full ">
                <div className="h-2 w-full rounded-lg bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-2 bg-primary rounded-lg"
                    style={{ width: "45%", backgroundColor: "#0F60FF" }}
                  ></div>
                </div>
              </div>
              <div className="progress-percent">
                <div className="text-success flex items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                  >
                    <path
                      d="M5 13L10 8L15 13"
                      stroke="#28C76F"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-1">25.8%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-custom items-center flex-nowrap gap-4 mb-4">
              <Image src={Brazil} width={34} height={34} alt="sales " />
              <div className="collection">
                <div className="text-base font-semibold">$26k</div>

                <div className="text-muted text-xs">Brazil</div>
              </div>
              <div className="progress-bar w-full ">
                <div className="h-2 w-full rounded-lg bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-2 bg-primary rounded-lg"
                    style={{ width: "45%", backgroundColor: "#0F60FF" }}
                  ></div>
                </div>
              </div>
              <div className="progress-percent">
                <div className="text-danger flex items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#EA5455"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="ml-1">16.2%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-custom items-center flex-nowrap gap-4">
              <Image src={Aus} width={34} height={34} alt="sales " />
              <div className="collection">
                <div className="text-base font-semibold">$17k</div>

                <div className="text-muted text-xs">Australia</div>
              </div>
              <div className="progress-bar w-full ">
                <div className="h-2 w-full rounded-lg bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-2 bg-primary rounded-lg"
                    style={{ width: "45%", backgroundColor: "#0F60FF" }}
                  ></div>
                </div>
              </div>
              <div className="progress-percent">
                <div className="text-danger flex items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#EA5455"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="ml-1">11.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-white">
          <Tabs activeState={""}></Tabs>
        </div>
      </section>
      <section className="filters my-6">
        <div className="flex">
          <form
            action=""
            className="flex  flex-wrap gap-4 justify-between items-center w-full"
          >
            <div className="flex justify-start items-center">
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
                  className="bg-white pl-4 pr-8 py-3  outline-none rounded focus:outline-none appearance-none"
                  name="select-box"
                >
                  <option value="1">All Status</option>
                  {["Completed", "Pending", "Cancelled"].map((opt, index) => (
                    <option value={opt} key={index}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <Searchbox />
            </div>
            <div>
              <CustomDateRange />
            </div>
          </form>
        </div>
      </section>
      <section className="table-section rounded-2xl bg-white mt-6">
        <Table userlist={userlist} />
      </section>
    </div>
  );
}
