import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const SalesChart = () => {
  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Sales 2023",
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  useEffect(() => {
    const fetchMonthlyRevenue = async () => {
      try {
        const response = await fetch("/api/getStripeMonthlyRevenue");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.monthlyRevenue) {
          setMonthlyRevenue(data.monthlyRevenue);
        } else {
          throw new Error("Ungültige Daten erhalten");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMonthlyRevenue();
  }, []);

  const lables = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const salesData = monthlyRevenue.map((entry) => entry.totalAmountInEUR);

  const data = {
    labels: lables,
    datasets: [
      {
        label: "Sales",
        data: salesData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default SalesChart;
