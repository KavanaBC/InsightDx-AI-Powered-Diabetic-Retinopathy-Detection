import React from "react";
import Layout from "./Layout"; // Layout with Sidebar & Header
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./History.css";

const History = () => {
  // Sample user screening history data
  const historyData = [
    { id: 1, date: "2025-03-20", result: "Normal", confidence: 95, image: "eye1.jpg" },
    { id: 2, date: "2025-03-18", result: "Mild DR", confidence: 85, image: "eye2.jpg" },
    { id: 3, date: "2025-03-15", result: "Moderate DR", confidence: 78, image: "eye3.jpg" },
  ];

  // Data for line chart (Progress Over Time)
  const lineData = {
    labels: historyData.map((entry) => entry.date),
    datasets: [
      {
        label: "Confidence Score (%)",
        data: historyData.map((entry) => entry.confidence),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
      },
    ],
  };

  // Data for pie chart (Result Distribution)
  const resultCounts = historyData.reduce((acc, entry) => {
    acc[entry.result] = (acc[entry.result] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(resultCounts),
    datasets: [
      {
        data: Object.values(resultCounts),
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722", "#9C27B0"],
      },
    ],
  };

  return (
    <Layout>
      <div className="history-container">
        <h2>Screening History</h2>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart-box">
            <h3>Screening Confidence Over Time</h3>
            <Line data={lineData} />
          </div>
          <div className="chart-box">
            <h3>Result Distribution</h3>
            <Pie data={pieData} />
          </div>
        </div>

        {/* History Cards */}
        <div className="history-list">
          {historyData.map((entry) => (
            <div key={entry.id} className="history-card">
              <img src={entry.image} alt="Eye Scan" className="history-image" />
              <div className="history-details">
                <p><strong>Date:</strong> {entry.date}</p>
                <p><strong>Result:</strong> {entry.result}</p>
                <p><strong>Confidence:</strong> {entry.confidence}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default History;
