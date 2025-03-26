import React from "react";
import Layout from "./Layout";
import "./Profile.css";
import { FaUserEdit, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Profile = ({ setIsAuthenticated }) => {
  const [darkMode, setDarkMode] = useState(false); // Theme toggle state

  // Temporary User Data (Replace with backend later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "AI Researcher",
    joined: "March 2024",
    lastLogin: "March 20, 2025",
    reportsAnalyzed: 58,
    profilePic: "cat-modified.png", // Placeholder Image
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  };

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className={`profile-page ${darkMode ? "dark-mode" : ""}`}>
        {/* Background Banner */}
        <div className="profile-banner"></div>

        <div className="profile-card">
          {/* Profile Picture & Info */}
          <div className="profile-header">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <h2 className="username">{user.name}</h2>
            <p className="user-role">{user.role}</p>
          </div>

          {/* Profile Details */}
          <div className="profile-info">
            <div className="info-item"><span>Email:</span> <span>{user.email}</span></div>
            <div className="info-item"><span>Role:</span> <span>{user.role}</span></div>
            <div className="info-item"><span>Joined:</span> <span>{user.joined}</span></div>
            <div className="info-item"><span>Last Login:</span> <span>{user.lastLogin}</span></div>
            <div className="info-item"><span>Reports Analyzed:</span> <span>{user.reportsAnalyzed}</span></div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href={user.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="profile-actions">
            <button className="edit-profile">
              <FaUserEdit className="edit-icon-btn" /> Edit Profile
            </button>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
