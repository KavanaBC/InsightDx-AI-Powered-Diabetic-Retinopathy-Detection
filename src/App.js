import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Support from "./components/Support";
import History from "./components/History";
import EyeScreening from "./components/EyeScreening";
import Settings from "./components/Settings";

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
            <Route path="/history" element={<History />} />
            <Route path="/eyeScreening" element={<EyeScreening />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        ) : (
          <Auth setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </Router>
  );
};

export default App;
