"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data } from "@/data";

export default function Areachart({ month }) {
  const formatYAxisTick = (tick) => {
    if (tick >= 1000000) {
      return `${tick / 1000000}M`;
    }
    if (tick >= 1000) {
      return `${tick / 1000}k`;
    }
    return tick;
  };

  let selectedData;

  switch (month) {
    case "dec":
      selectedData = data.dec;
      break;
    case "jan":
      selectedData = data.jan;
      break;
    case "feb":
      selectedData = data.feb;
      break;
    case "mar":
      selectedData = data.mar;
      break;
    case "apr":
      selectedData = data.apr;
      break;
    default:
      selectedData = [];
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={150}
        height={40}
        data={selectedData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxisTick} />
        <Area type="linear" dataKey="sale" stroke="#8884d8" fill="#8884d8" />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}


