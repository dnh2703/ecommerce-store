import React from "react";
import LineChart from "../common/LineChart";
import { ScriptableContext } from "chart.js";

const NewCustomer = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customers",
        data: [33, 53, 85, 41, 44, 65],
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0.3, "rgba(31,41,55,.9)");
          gradient.addColorStop(1, "rgba(17,24,39,.7)");
          return gradient;
        },
        borderColor: "rgba(75,192,192,1)",
        pointBorderColor: "transparent",
        pointBackgroundColor: "white",
        tension: 0.5,
      },
    ],
    options: {},
  };

  const options = {
    plugins: {
      colors: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: false,
          tickBorderDash: [10],
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:col-span-2  justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
      <p className="">
        <span className="text-white text-xl font-semibold">New Customers</span>
      </p>
      <div className="pt-4 w-full">
        <LineChart data={data} height={280} options={options} />
      </div>
    </div>
  );
};

export default NewCustomer;
