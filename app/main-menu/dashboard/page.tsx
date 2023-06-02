import Image from "next/image";
import React from "react";
import Header from "../../components/Header";
import Sales from "../../../public/images/business-and-finance 1.png";
export default function Dashboard() {
  const title = "dashboard";
  return (
    <div className="dashboard py-2 px-5 bg-gray-100 grow ">
      <Header title={title}></Header>
      <div className="dashbord flex items-center w-full gap-3">
        <div className="flex items-center total-sales w-full max-w-[398px]  border-card bg-white rounded p-6">
          <div className="grow-0">
            <Image src={Sales} width={73} height={73} alt="sales " />
          </div>
          <div className="divider mx-8 bg-gray-100 w-[2px] h-[140px]"></div>
          <div>
            <div className="card-title">
              <p className="text-lg font-medium">Total Sales & Costs</p>
              <small className="text-muted text-xs">Last 7 days</small>
            </div>
            <div className="card-body pt-7">
              <div className="price font-bold text-xl">$350K</div>
              <div className="text-xs">
                <small className="text-success">8.56K</small>
                <small className="text-muted ">vs last 7 days</small>
              </div>
            </div>
          </div>
        </div>

        <div className="flex total-sales w-full max-w-[242px]  border-card bg-white rounded p-6">
          <Image src={Sales} width={73} height={73} alt="sales " />
          <hr />
          <div className="card-title">
            <p className="text-lg font-medium">Total Sales & Costs</p>
            <small className="text-muted text-xs">Total Sales & Costs</small>
          </div>
        </div>

        <div className="flex total-sales w-full max-w-[452px] border-card bg-white rounded p-6">
          <Image src={Sales} width={73} height={73} alt="sales " />
          <div className="card-title">
            <p className="text-lg font-medium">Total Profit</p>
            <small className="text-muted text-xs">Total Sales & Costs</small>
          </div>
        </div>
      </div>
    </div>
  );
}
