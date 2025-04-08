import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from "react-router-dom";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = () => {
  const [chartData, setChartData] = useState(null); // Dynamic chart data
  const [error, setError] = useState(null); // Error state
  const { email } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/analysis-client/${email}`
        );
        console.log(res.data);
        if (Array.isArray(res.data)) {
          const labels = ["Success", "Failed", "Pending"];
          const data = res.data.map((eachData) => eachData.data); // Ensure API structure matches
          setChartData({
            labels,
            datasets: [
              {
                label: "Booking Analysis",
                data,
                backgroundColor: ["#39FF12", "#F70D1A", "#FFCE56"],
                hoverBackgroundColor: ["#39FF12", "#F70D1A", "#FFCE56"],
                hoverOffset: 4,
              },
            ],
          });
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col justify-between">
      {/* Title */}
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-mono text-[#1d1d1d] text-center mb-8 p-4">
        Analysis ⚙️ Between Failed 🔴 and Success 🟢 Bookings
      </h1>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Content container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-auto px-4">
        <div className="flex flex-col shadow-lg px-4 py-4">
          <p className="font-medium text-2xl text-center mb-2">Booking History</p>
          <div className="flex justify-center items-center h-full w-full mt-8 md:mt-0">
            <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
              {chartData ? (
                <Pie data={chartData} className="h-full w-full" />
              ) : (
                <p className="text-center text-gray-500">Loading chart data...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
