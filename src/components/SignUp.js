import React from "react";
import SocialIcons from "./SocialIcons";

const SignUp = () => {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <SocialIcons />
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
