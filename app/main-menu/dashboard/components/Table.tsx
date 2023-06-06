import Pagination from "@/app/components/Pagination";
import Link from "next/link";
import React from "react";

export default function Table({ userlist }: { userlist: any }) {
  return (
    <div className=" mt-6 rounded-2xl bg-white dark:bg-slate-800 max-w-full overflow-auto ">
      <table className="border-collapse table-auto w-full text-base">
        <thead className="bg-white">
          <tr className="uppercase p-6 ">
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              ID
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              customer
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              Date
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              Total
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              Method
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              Status
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-muted text-sm font-medium text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {userlist.map((user: any) => (
            <tr key={user.id} className="p-6">
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                {user.id}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                {user.customer}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                {user.date}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                ${user.total}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                {user.method}
              </td>
              <td
                className={`${
                  user.status === "pending" ? "text-warning" : ""
                } ${user.status === "completed" ? "text-success" : ""} ${
                  user.status === "rejected" ? "text-danger" : ""
                }  border-b border-slate-100 dark:border-sborder-b dark:border-slate-700 p-4 pl-8`}
              >
                {user.status}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                <Link href="#" className="capitalize text-primary">
                  view more
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination></Pagination>
    </div>
  );
}
