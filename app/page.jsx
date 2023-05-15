"use client";

import { useState } from "react";

import Areachart from "@/components/AreaChart";
import Barchart from "@/components/BarChart";

export default function Home() {
  const [month, setMonth] = useState("feb");

  return (
    <main className="w-full h-full p-4 px-10 overflow-y-auto">
      {/* sale charts section*/}
      <section className="grid w-full grid-cols-2 h-1/2">
        <article>
          <Areachart month={month} />
        </article>
        <article>
          <Barchart month={month} />
        </article>
      </section>
    </main>
  );
}
