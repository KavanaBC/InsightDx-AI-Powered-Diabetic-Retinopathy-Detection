import React from "react";
import Layout from "./Layout"; // Import Layout
import "./Home.css";

const Home = ({ setIsAuthenticated }) => {
  const username = localStorage.getItem("username") || "Guest";
  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <h2>Hello, {username}! Welcome to InsightDx!</h2> {/* ✅ Dynamically updated greeting */}
      <p className="center">An AI-Powered Diabetic Retinopathy Detection!</p> {/* ✅ Updated message */}
    </Layout>
  );
};

export default Home;
