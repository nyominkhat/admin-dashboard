import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chart_data } from "@/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "User Blah",
    },
  },
};

const labels = chart_data.map((data) => data.year);

export const data = {
  labels,
  datasets: [
    {
      label: "User Gain",
      data: chart_data.map((data) => data.userGain),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "User Lost",
      data: chart_data.map((data) => data.userLost),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function BarChart() {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}
