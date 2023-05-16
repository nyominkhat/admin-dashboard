import React, { useState, useEffect } from "react";

import { recent_req_data } from "@/data";

export default function RecentReq() {
  const [data, setData] = useState([]);
  console.log(recent_req_data);

  useEffect(() => {
    setData(recent_req_data.slice(0, 10));
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#191919]">Recent Request</h2>

        <button className="px-4 py-2 font-semibold text-sm rounded-md text-slate-300 bg-[#191919]">
          View All
        </button>
      </div>

      <table className="w-full px-5 mt-4 border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="p-2 text-start text-slate-600">Customers</th>
            <th className="p-2 text-start text-slate-600">Purchase Date</th>
            <th className="p-2 text-start text-slate-600">Purchase ID</th>
          </tr>
        </thead>
        <tbody className="border border-slate-500">
          {data.map((item, index) => (
            <tr
              className="transition-all duration-300 rounded-md cursor-pointer hover:shadow-md"
              key={item.id}
            >
              <td className="relative flex items-center gap-5 p-2 text-start">
                <span className="absolute -left-5 font-medium text-[#191919]">
                  {item.id}.
                </span>
                <img
                  className="object-cover rounded-full max-w-[2.5rem] max-h-[2.5rem]"
                  src={item.customer.img}
                  alt=""
                />
                <p className="font-medium text-[#191919]">
                  {item.customer.name}
                </p>
              </td>
              <td className="p-2 text-start font-medium text-[#191919]">
                {item.purchase_date}
              </td>
              <td className="p-2 text-start font-medium text-[#191919]">
                {item.purchase_id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
