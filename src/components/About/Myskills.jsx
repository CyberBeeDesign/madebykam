import React, { useRef, useEffect, useState } from 'react'
import Lottie from "lottie-react";
import skillGraphAnimation from "../../assets/Skill-graph.json";
import './Myskills.css'

const Myskills = () => {
  const lottieRef = useRef();
  const graphRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (graphRef.current) {
      observer.observe(graphRef.current);
    }
    return () => {
      if (graphRef.current) observer.unobserve(graphRef.current);
    };
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      if (isVisible) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [isVisible]);

  return (
    <div className='myskills-container'>
      <div className='myskills-block'>
        <h2>My skills</h2>
        <div className='myskills-graph' ref={graphRef}>
          <Lottie
            lottieRef={lottieRef}
            animationData={skillGraphAnimation}
            loop={false}
            autoplay={false}
            />
        </div>
      </div>
    </div>
  )
}

export default Myskills
