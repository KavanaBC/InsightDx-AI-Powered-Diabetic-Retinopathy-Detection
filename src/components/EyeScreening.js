import React, { useState } from "react";
import Layout from "./Layout";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./EyeScreening.css";

const EyeScreening = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAnalysisResult({
        condition: "No Signs of Diabetic Retinopathy",
        confidence: "98%",
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="eye-screening-container">
        {/* Left Section - Upload & Analyze */}
        <div className="upload-section">
          <h2>Upload Eye Image</h2>
          <label className="upload-box">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <FaCloudUploadAlt className="upload-icon" />
            <p>Click or Drag an Eye Image</p>
          </label>

          <button className="analyze-btn" onClick={handleAnalyze} disabled={!selectedImage}>
            Analyze Image
          </button>
        </div>

        {/* Right Section - Image Preview & Results */}
        <div className="result-section">
          <h2>Analysis Result</h2>
          {selectedImage ? (
            <div className="image-preview">
              <img src={selectedImage} alt="Uploaded Eye" />
            </div>
          ) : (
            <p className="placeholder-text">No Image Selected</p>
          )}

          {loading && <div className="loader">Analyzing...</div>}

          {analysisResult && !loading && (
            <div className="result-card">
              <h3>Condition: {analysisResult.condition}</h3>
              <p>Confidence: {analysisResult.confidence}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EyeScreening;
