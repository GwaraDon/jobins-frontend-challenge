import Header from "@/app/components/Header";
import React from "react";

export default function ProductList() {
  const title = "Product List";
  return (
    <div className=" product-list py-2 px-5 grow  overflow-auto z-10">
      <Header title={title}></Header>
    </div>
  );
}
