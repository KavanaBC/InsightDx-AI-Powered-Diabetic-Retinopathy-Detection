import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-container">
      <a href="#" className="social"><FaFacebookF /></a>
      <a href="#" className="social"><FaGooglePlusG /></a>
      <a href="#" className="social"><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialIcons;
