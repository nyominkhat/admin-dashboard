"use client";

import BarChart from "@/components/BarChart";
import RecentReq from "@/components/RecentReq";
import Topcard from "@/components/Topcard";
import { top_card_data } from "@/data";
import { useState } from "react";

// import Areachart from "@/components/AreaChart";
// import Barchart from "@/components/BarChart";

export default function Home() {
  const [month, setMonth] = useState("apr");

  return (
    <main className="w-full h-full p-4 pt-8 overflow-y-auto md:px-10">
      {/* topcard section */}
      <section className="flex flex-wrap items-center justify-between w-full h-20 sm:h-32 lg:h-40 gap-y-3">
        {top_card_data.map((item) => (
          <Topcard key={item.label} data={item} />
        ))}
      </section>

      {/* charts section and recent req section */}
      <section className="grid w-full grid-cols-1 gap-10 mt-10 h-1/2 md:grid-cols-2">
        {/* chart */}
        <div className="w-full h-full">
          <BarChart />
        </div>

        {/* recent */}
        <div className="border border-black">
          <RecentReq />
        </div>
      </section>
    </main>
  );
}
