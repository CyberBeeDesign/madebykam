import React, {useEffect, useState} from "react";
import './Hero.css';
import PortraitimgBW from '../../../assets/Portrait(BW).png';
import PortraitHover from '../../../assets/Portrait.png';
import EllipseBlue from '../../../assets/Ellipseblue.png';
import EllipseYellow from '../../../assets/EllipseYellow.png';
import EllipseGrey from '../../../assets/ELlipseGrey.png'
import UnionBlue from '../../../assets/UnionBlue.png';
import UnionGrey from '../../../assets/UnionGrey.png';
import UnionYellow from '../../../assets/UnionYellow.png';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setanimate] = useState(false);
  
    useEffect(() => {
      setTimeout(() => 
        setanimate(true), 700);
    }, []);

  return (
    <div className="hero">
        <div className="hero-left">
            <img src={EllipseYellow} alt="ellipse yellow" className="ellipse-yellow"/>
            <div className={`hero-left-text${animate ? ' slide-in-left' : ''}`}>
            <h1>design</h1>
            <p>I build consistent, user-focused design systems.</p>
            </div>
            <img src={UnionBlue} alt="union blue" className="union-blue"/>
        </div>
        <div className="hero-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        > <img src={EllipseBlue} alt="ellipse blue" className="ellipse-blue-big"/>
          <img
            src={PortraitimgBW}
            alt="portrait bw"
            className={`portrait portrait-bw${!isHovered ? ' visible' : ''}`}
          />
          <img
            src={PortraitHover}
            alt="portrait color"
            className={`portrait portrait-color${isHovered ? ' visible' : ''}`}
          />
          <img src ={UnionGrey} alt="union grey" className="union-grey"/>
        </div>
        <div className="hero-right">
            <img src ={UnionYellow} alt="union yellow" className="union-yellow"/>
            <div className={`hero-right-text${animate ? ' slide-in-left' : ''}`}>
            <h1>&lt;code&gt;</h1>
            <p>I write structured, readable, and scalable code.</p>
            </div>
            <img src={EllipseGrey} alt="ellipse grey" className="ellipse-grey"/>
        </div>
    </div>
  );
}

export default Hero;