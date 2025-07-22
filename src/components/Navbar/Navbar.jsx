import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import LinkedInIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";
import dribbbleIcon from "../../assets/dribbble.png";
import LinkedInWhite from "../../assets/linkedin(W).png";
import GitHubWhite from "../../assets/github(W).png";
import dribbbleWhite from "../../assets/dribbble(W).png";

const menuConfig = {
  "/": [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  "/about": [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  "/portfolio": [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  "/contact": [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menu = menuConfig[currentPath] || menuConfig["/"];

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      {/*Hamburger Menu*/}
      <div
        className={`hamburger ${menuOpen ? "open" : ""} `}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
      {/*Dropdown Menu*/}
      <div className={`dropdown-menu ${menuOpen ? " show" : ""}`}>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={currentPath === item.path ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/kam-zehani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/CyberBeeDesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://dribbble.com/CyberBeeDesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribbbleIcon} alt="Dribbble" />
          </a>
        </div>
      </div>
      {/*Desktop Menu*/}
      <ul className="desktop-menu">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={currentPath === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="socials desktop-socials">
        <a
          href="https://www.linkedin.com/in/kam-zehani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/CyberBeeDesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a
          href="https://dribbble.com/CyberBeeDesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dribbbleIcon} alt="Dribbble" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
