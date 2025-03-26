import React, { useState } from "react";
import Layout from "./Layout";
import "./Settings.css";
import { FaSun, FaMoon, FaLock, FaGlobe, FaBell, FaUserEdit } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <Layout>
      <div className="settings-page">
        <h2 className="settings-title">Settings</h2>

        {/* Theme Mode */}
        <section className="settings-section">
          <h3>Appearance</h3>
          <div className="setting-option">
            <span>Dark Mode</span>
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
              {darkMode ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </section>

        {/* Language */}
        <section className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-option">
            <span>Language</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </section>

        {/* Notifications */}
        <section className="settings-section">
          <h3>Notifications</h3>
          <div className="setting-option">
            <span>Enable Notifications</span>
            <button className="toggle-btn">
              <FaBell />
            </button>
          </div>
        </section>

        {/* Security */}
        <section className="settings-section">
          <h3>Security</h3>
          <div className="setting-option">
            <span>Change Password</span>
            <button className="settings-btn">
              <FaLock />
            </button>
          </div>
        </section>

        {/* Account */}
        <section className="settings-section">
          <h3>Account</h3>
          <div className="setting-option">
            <span>Edit Profile</span>
            <button className="settings-btn">
              <FaUserEdit />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Settings;
