import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Rates",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "transparent",
      borderColor: "rgba(75,192,192,1)",
      pointBorderColor: "transparent",
      tension: 0.5,
    },
  ],
};

const SmallLineChart = () => {
  return (
    <div className="chart-container w-full md:w-48">
      <Line
        options={{
          plugins: {
            colors: {
              enabled: false,
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        }}
        data={data}
        height={50}
      />
    </div>
  );
};

export default SmallLineChart;
