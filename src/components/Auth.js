import { useState } from "react";
import "./styles/auth.css";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

function Auth({ setIsAuthenticated }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (setIsAuthenticated) {
      setIsAuthenticated(true);
    } else {
      console.error("setIsAuthenticated is undefined");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (setIsAuthenticated) {
      setIsAuthenticated(true);
    } else {
      console.error("setIsAuthenticated is undefined");
    }
  };

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><FaFacebookF /></a>
            <a href="#" className="social"><FaGooglePlusG /></a>
            <a href="#" className="social"><FaLinkedinIn /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><FaFacebookF /></a>
            <a href="#" className="social"><FaGooglePlusG /></a>
            <a href="#" className="social"><FaLinkedinIn /></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
