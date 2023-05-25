import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors,
  Filler
);

ChartJS.defaults.color = "rgb(156 163 175)";
ChartJS.defaults.borderColor = "rgb(55 65 81)";

const LineChart = ({ data, options, height }: any) => {
  return (
    <div className="chart-container">
      <Line options={options} data={data} height={height} />
    </div>
  );
};

export default LineChart;
