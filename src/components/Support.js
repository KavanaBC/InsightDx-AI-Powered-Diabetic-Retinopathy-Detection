import React from "react";
import Layout from "./Layout";
import "./Support.css";

const Support = () => {
  return (
    <Layout>
      <div className="support-container">
        <h2>What is InsightDx?</h2>
        <img src={"qp.jpg"} alt="Question Icon" className="question-image" />
        <p>
          InsightDx is an AI-powered platform designed for early detection and diagnosis of diabetic retinopathy through eye screening.
        </p>
      </div>
    </Layout>
  );
};

export default Support;
