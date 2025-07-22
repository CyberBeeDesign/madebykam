import React from "react";
import cinefyMockup from "../../../assets/Cinefy-Mockup.png";
import jammmingMockup from "../../../assets/Jammming-mockup.png";
import coffeebeanMockup from "../../../assets/Coffeebean-mockup.png";
import arrowmore from "../../../assets/arrow-more.png";
import "./LastProject.css";

const LastProject = () => {
  return (
    <div className="lastproject-container">
      <div className="lastproject">
        <h2>My last projects</h2>
        <div className="lastprojectcard-box">
          <div className="lastprojectcard">
            <img src={cinefyMockup} alt="cinefy-mockup" className="Mockup" />
            <div className="lastproject-text-container">
              <div className="lastproject-text">
                <h3>Cinefy</h3>
                <p>Website design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </div>

          <div className="lastprojectcard">
            <img
              src={jammmingMockup}
              alt="jammming-mockup"
              className="Mockup"
            />
            <div className="lastproject-text-container">
              <div className="lastproject-text">
                <h3>Jammming</h3>
                <p>Side project</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </div>

          <div className="lastprojectcard">
            <img
              src={coffeebeanMockup}
              alt="coffeebean-mockup"
              className="Mockup"
            />
            <div className="lastproject-text-container">
              <div className="lastproject-text">
                <h3>CoffeeBean</h3>
                <p>Website design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProject;
