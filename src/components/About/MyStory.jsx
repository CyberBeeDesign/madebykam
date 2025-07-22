import React, { useEffect, useRef, useState } from 'react'
import meworking from '../../assets/meworking.png'
import officeimg from '../../assets/office-img.png'
import './MyStory.css'

const MyStory = () => {
  const [animateRight, setAnimateRight] = useState(false);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateRight(true);
      },
      { threshold: 0.5 }
    );
    if (rightRef.current) observer.observe(rightRef.current);
    return () => {
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className='mystory'>
        <div className='container'>
            <div className='mystory-left'>
            <h2>My story</h2>
            <p>
              It all started in 2017 when I just needed a simple website for my business. “How hard can it be?” I thought.<br /><br />
              At first, I believed coding was just throwing some numbers and symbols together, like I was hacking into the Matrix. Turns out, isn&apos;t short for “divine intervention.” After a few hilarious missteps (including styling a button so well it disappeared), I fell in love with the chaos of web development.<br /><br /> 
              One Google search led to another, and suddenly I was deep in the world of HTML, CSS, JavaScript, and frameworks I couldn't even pronounce at the time. Now here I am — still learning, still laughing at past me, and still pressing Ctrl + Z like it's a life-saving move.
            </p>
            </div>
            <div
          className={`mystory-right${animateRight ? ' slide-in-right' : ''}`}
          ref={rightRef}
        >
          <div className='office'>
            <img src={officeimg} alt="office"/>
            <img src={meworking} alt="meworking" className='meworking'/>
            <p>Simple, efficient, and no — it&apos;s not always this organized.</p>
          </div>
        </div>
        </div>
    </div>
    )
}

export default MyStory
