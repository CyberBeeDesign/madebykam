import React from "react";
import weathernow from "../../../assets/wther-now.png";
import planpin from "../../../assets/plan-pin.png";
import "./LastProject.css";

const LastProject = () => {
  return (
    <div className="lastproject-container">
      <div className="lastproject">
        <h2>My last projects</h2>
      <div className="lastprojectcard-wrapper">
        <div className="lastprojectcard-box">
          <a
            href="https://wther-now.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cardlastproject"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              width: "500px",
              height: "400px",
              borderRadius: "10px",
              justifyContent: "space-between",
              overflow: "hidden",
              margin: "0 auto",
              backgroundColor: "#231e5dff",
              cursor: "pointer",
            }}
          >
            <span>
              a modern weather application that provide real-time weather
              information and local time
            </span>
            <img
              src={weathernow}
              alt="weather-now-mockup"
              className="mockup"
              style={{
                boxShadow: "0 0 20px #3C30D0ff, 0 0 40px #3C30D0ff, 0 0 60px #3C30D0ff",
              }}
            />
          </a>
        </div>

        <div className="lastprojectcard-box">
          <a
            href="https://planpin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cardlastproject"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              width: "500px",
              height: "400px",
              borderRadius: "10px",
              justifyContent: "space-between",
              overflow: "hidden",
              margin: "0 auto",
              backgroundColor: "#00A1B2",
              cursor: "pointer",
            }}
          >
            <span>
              a react application that help travelers plan their trips by
              organizing activities and creating itineraries
            </span>
            <img
              src={planpin}
              alt="plan-pin-mockup"
              className="mockup"
              style={{
                boxShadow: "0 0 20px #acd0d4ff, 0 0 40px #acd0d4ff, 0 0 60px #acd0d4ff",
              }}
            />
          </a>
        </div>
        
      </div>

      </div>
      
    </div>
  );
};

export default LastProject;
