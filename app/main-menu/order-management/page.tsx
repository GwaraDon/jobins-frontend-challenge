import Header from "@/app/components/Header";
import React from "react";

export default function OrderManagement() {
  const title = "Order Management";
  return (
    <div className=" order-management py-2 px-5 grow  overflow-auto z-10">
      <Header title={title}></Header>
    </div>
  );
}
