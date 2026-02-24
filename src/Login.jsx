import React, { useState, useEffect } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (password.length === 0) setStrength(0);
    else if (password.length < 6) setStrength(30);
    else if (password.length < 10) setStrength(60);
    else setStrength(100);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin();
    }
  };

  return (
    <div className={`portal-container ${isLogin ? "theme-blue" : "theme-green"}`}>{
  
      }
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="portal-card">
        <div className={`portal-left ${isLogin ? "" : "active"}`}>
          <div className="content-inner">
            <span className="badge">{isLogin ? "Verified Secure" : "Join the Future"}</span>
            <h1>{isLogin ? "Umbrella Academy" : "Start Your Story"}</h1>
            <p>
              {isLogin 
                ? "Sign in to access your digital campus and personalized learning tools."
                : "Register today to unlock global opportunities and expert-led courses."}
            </p>
            <button className="switch-btn" onClick={() => {setIsLogin(!isLogin); setPassword("");}}>
              {isLogin ? "New Student? Enroll" : "Already a Student? Login"}
            </button>
          </div>
        </div>

        <div className="portal-right">
          <div className={`form-wrapper ${isLogin ? "login-view" : "register-view"}`}>
            
            <form className="form login-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Welcome Back</h2>
                <span>Please enter your credentials</span>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>
              <button className="portal-btn">Authorize Access</button>
            </form>

            <form className="form register-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Create Profile</h2>
                <span>Begin your enrollment process</span>
              </div>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Student Email" required />
              
              <div className="password-meter-container">
                <input 
                  type="password" 
                  placeholder="Create Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />{
                  
                }
                <div className="strength-bar">
                  <div 
                    className={`strength-fill ${strength === 100 ? 'full' : ''}`} 
                    style={{ width: `${strength}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="portal-btn">Complete Registration</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}