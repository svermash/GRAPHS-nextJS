"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import sourceDATA from "../data/CGPA_DATA.json";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

export default function TheGraph() {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 4,
        max: 10,
        ticks: {
          stepSize: 0.2,
          autoSkip: false,
        //   why callback like this needs to figure out
        callback: function (value: string | number) {
            if (typeof value === "number") {
            return value.toFixed(1);
            }
            return value;
        },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        display: false,
        anchor: "end",
        align: "top",
        offset: 1,
        color: "rgba(0, 0, 0, 1)",
        font: {
          weight: "bold",
          size: 15,
        },
      },
    },
  };

  const getColorByIndex = (index: number): string => {
    const r = (index * 95) % 256;
    const g = (index * 88) % 256;
    const b = (index * 48) % 256;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const data = {
    labels: ["SEM_1", "SEM_2", "SEM_3", "SEM_4", "SEM_5", "SEM_6"],
    datasets: sourceDATA.map((student: { Roll: number; CGPA: number[] }, index: number) => ({
      label: `${student.Roll}`,
      data: student.CGPA.map((val) => (val === 0 ? null : val)),
      borderColor: getColorByIndex(index),
      backgroundColor: getColorByIndex(index),
      fill: false,
      tension: 0,
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: getColorByIndex(index),
      pointBorderColor: "black",
    })),
  };

  return (
    <div className="whole-body">
      <div className="Tchart-box">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
