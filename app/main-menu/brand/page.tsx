import Header from "@/app/components/Header";
import React from "react";

export default function Brand() {
  const title = "Brand";
  return (
    <div className="brand py-2 px-5 grow  overflow-auto z-10">
      <Header title={title}></Header>
    </div>
  );
}
