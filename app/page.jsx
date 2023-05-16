"use client";

import BarChart from "@/components/BarChart";
import Map from "@/components/map";
import RecentReq from "@/components/RecentReq";
import Topcard from "@/components/Topcard";
import { top_card_data } from "@/data";

export default function Home() {
  return (
    <main className="w-full h-full p-4 pt-8 overflow-y-auto md:px-10">
      {/* topcard section */}
      <section className="flex flex-wrap items-center justify-between w-full gap-y-3">
        {top_card_data.map((item) => (
          <Topcard key={item.label} data={item} />
        ))}
      </section>

      {/* charts section and recent req section */}
      <section className="grid w-full grid-cols-3 grid-rows-2 gap-5 mt-10 lg:h-[80vh]">
        {/* chart */}
        <div className="flex items-center w-full col-span-3 p-4 border rounded-md shadow-sm m-auto h-[30vh] lg:h-full justify-cent1er lg:col-span-1 border-slate-300 row-span-1">
          <BarChart />
        </div>

        {/* recent */}
        <div className="w-full lg:h-[100%] col-span-3 lg:col-span-2 p-4 overflow-scroll border rounded-md shadow-sm border-slate-300 row-span-2">
          <RecentReq />
        </div>

        {/* map */}
        <section className="col-span-1 row-span-1 p-2 overflow-hidden border rounded-md shadow-sm border-slate-300">
          <Map />
        </section>
      </section>
    </main>
  );
}
