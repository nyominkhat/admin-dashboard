import React from "react";

export default function Topcard({ data }) {
  return (
    <article className="flex items-center justify-between h-full p-4 px-6 border rounded-md shadow-sm lg:w-[30%] w-full">
      <div className="space-y-1">
        <p className="text-2xl font-semibold">${data.price}</p>
        <p className="text-lg font-medium">{data.label}</p>
      </div>

      <div className="flex items-center justify-center h-14 w-14 md:w-20 md:h-20 border rounded-sm bg-[#191919] text-slate-300 font-medium">
        +{data.percent}%
      </div>
    </article>
  );
}
