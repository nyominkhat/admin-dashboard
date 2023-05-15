"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { data } from "@/data";

export default function Barchart({ month }) {
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
      <BarChart
        width={150}
        height={40}
        data={selectedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sale" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}


