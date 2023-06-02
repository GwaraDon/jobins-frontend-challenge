import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <div className="header flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
        <div className="settings">
          <div className="settings notification"></div>
          <div className="settings account"></div>
        </div>
      </div>
    </>
  );
}
