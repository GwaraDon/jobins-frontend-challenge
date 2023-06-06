import Image from "next/image";
import Link from "next/link";
import React from "react";
import not_found from "../public/404.jpg";
export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary text-4xl font-bold">Page not found</h1>
        <Image src={not_found} width={500} height={500} alt="404" />
        <Link
          href={"/main-menu/dashboard"}
          className="text-white bg-primary px-4 py-2 rounded-md mt-4 hover:bg-opacity-90 transition-all"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
