import Header from "@/app/components/Header";
import React from "react";

export default function AddProduct() {
  const title = "Add product";
  return (
    <div className="  add-product py-2 px-5 grow  overflow-auto z-10">
      <Header title={title}></Header>
    </div>
  );
}
