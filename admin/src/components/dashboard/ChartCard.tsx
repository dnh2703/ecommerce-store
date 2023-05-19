import React from "react";
import LineChart from "../common/LineChart";

const ChartCard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customers",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "transparent",
        borderColor: "rgb(253 186 116)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgb(253 186 116)",
        tension: 0.5,
      },
      {
        label: "Customers",
        data: [20, 32, 55, 61, 44, 30],
        fill: true,
        backgroundColor: "transparent",
        borderColor: "rgb(253 224 71)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgb(253 224 71)",
        tension: 0.5,
      },
    ],
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
          tickBorderDash: [10],
        },
      },
    },
  };

  return (
    <>
      <p className="">
        <span className="text-white text-xl font-semibold">
          Revenue vs Orders
        </span>
      </p>
      <div className="pt-4">
        <LineChart options={options} data={data} height={400} />
      </div>
      ;
    </>
  );
};

export default ChartCard;
