import React, { useState } from "react";
import { FaBars, FaHome, FaUserCircle } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Layout.css"; // Add necessary styling

const Layout = ({ children, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const username = "John Doe";

  return (
    <div className={`app-container ${sidebarOpen ? "sidebar-expanded" : ""}`}>
      {/* Header */}
      <header className="app-header">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <img src="InsightDx!.png" alt="Logo" className="app-logo" />
        <h1 className="app-title">InsightDx!</h1>
        <div className="header-left">
        <span className="username">{username}</span> {/* Replace with dynamic username */}
          <FaUserCircle className="profile-icon" onClick={() => navigate("/profile")} />
        </div>
      </header>

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => navigate("/")}>
            <FaHome className="sidebar-icon" />
            <span className={sidebarOpen ? "visible" : "hidden"}>Home</span>
          </li>
          <li onClick={() => navigate("/profile")}>
            <FaUserCircle className="sidebar-icon" />
            <span className={sidebarOpen ? "visible" : "hidden"}>Profile</span>
          </li>
          <li onClick={() => navigate("/history")}>
  <MdHistory />
  <span className={sidebarOpen ? "visible" : "hidden"}>History</span>
</li>
          <li onClick={()=> navigate("/eyeScreening")}>
            <AiFillEye />
            <span className={sidebarOpen ? "visible" : "hidden"}>Eye Screening</span>
          </li>
          <li onClick={() => navigate("/support")}>
            <FiHelpCircle />
            <span className={sidebarOpen ? "visible" : "hidden"}>Support</span>
          </li>
          <li onClick={()=>navigate("/settings")}>
            <MdSettings />
            <span className={sidebarOpen ? "visible" : "hidden"}>Settings</span>
          </li>
          <li onClick={() => setIsAuthenticated(false)}>
            <MdLogout />
            <span className={sidebarOpen ? "visible" : "hidden"}>Logout</span>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
