import React from "react";
import arrowmore from "../../assets/arrow-more.png";
import cinefyMockup from "../../assets/Cinefy-Mockup.png";
import jammmingMockup from "../../assets/Jammming-Mockup.png";
import coffeeBeanMockup from "../../assets/CoffeeBean-Mockup.png";
import boxermockup from "../../assets/Boxer-Mockup.png";
import ontheroadmockup from "../../assets/Ontheroad-Mockup.png";
import micasamockup from "../../assets/Micasa-Mockup.png";
import aromamockup from "../../assets/Aroma-Mockup.png";
import planpinMockup from "../../assets/PlanPin-Mockup.png";
import confTicketsGeneratorMockup from "../../assets/conf-tickets-generator-Mockup.png";

import "./theportfolio.css";

const theportfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div className="porfoliocard">
          <a
            href="https://planpin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={planpinMockup} alt="planpin-mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>PlanPin</h3>
                <p>Design & development</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://conf-tickets-generator.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={confTicketsGeneratorMockup} alt="conf-Tickets-Generator-Mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Conference ticket generator</h3>
                <p>Design & development</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>


        <div className="porfoliocard">
          <a
            href="https://cinefy-cyberbee.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cinefyMockup} alt="cinefy-mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Cinefy</h3>
                <p>Design & development</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://jammming-cyberbee.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={jammmingMockup}
              alt="jammming-mockup"
              className="Mockup"
            />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Jammming</h3>
                <p>Side project</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://cb-coffeebean.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={coffeeBeanMockup}
              alt="coffeebean-mockup"
              className="Mockup"
            />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>CoffeeBean</h3>
                <p>Design & development</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://dribbble.com/shots/24137398-Boxing-Gym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={boxermockup} alt="boxer-mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Boxer</h3>
                <p>Design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://dribbble.com/shots/23031424-Travel-blog-landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ontheroadmockup}
              alt="ontheroad-mockup"
              className="Mockup"
            />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>On the Road</h3>
                <p>Design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://dribbble.com/shots/23080336-Real-Estate-Agency-Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={micasamockup} alt="micasa-mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Micasa</h3>
                <p>Design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>

        <div className="porfoliocard">
          <a
            href="https://dribbble.com/shots/23080336-Real-Estate-Agency-Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={aromamockup} alt="micasa-mockup" className="Mockup" />
            <div className="portfolio-text-container">
              <div className="portfolio-text">
                <h3>Aroma</h3>
                <p>Design</p>
              </div>
              <img src={arrowmore} alt="" className="arrow-more" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default theportfolio;
