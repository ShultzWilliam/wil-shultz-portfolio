import React, { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../ThemeContext';
import KUTE from 'kute.js';
import '../styles/About.less'; // Import the Less file

const About: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const gElements = svgRef.current?.querySelectorAll('g path'); // Select all paths inside <g> elements
    if (gElements) {
      const morphAnimation = KUTE.allFromTo(
        gElements,
        { path: '#blob1' }, // Initial path (can be any valid SVG path string)
        { path: '#blob2' }, // Final path (same here, it's just a placeholder)
        { repeat: 999, duration: 2000, yoyo: true }
      );

      morphAnimation.start();
    }
  }, []);

  return (
    <div id='About' className={`about-me-container ${isDarkMode ? 'dark' : 'light'}`} style={{overflow: 'hidden'}}>
      <div className="main-section">
        <h1>Hey There! <br /> I'm Wil Shultz</h1>
        <p>
          I'm a software engineer who thrives on crafting engaging full-stack web applications. I love creating applications that people can enjoy using - looking to strike a balance between functionality and positive user experiences.
        </p>
      </div>
      <svg
        id="visual"
        ref={svgRef}
        viewBox="0 0 900 900"
        width="900"
        height="900"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="900" fill="rgba(0,0,0,0.0)"></rect>
        <g  transform="translate(491.5206553209706 477.36529711486)"><path id="blob1" d="M293.7 -159.4C367.5 -41.8 405 106.8 350 197.2C295 287.5 147.5 319.5 -7.4 323.8C-162.4 328.1 -324.8 304.7 -403.3 200.8C-481.8 96.8 -476.5 -87.6 -395.3 -209.5C-314.1 -331.3 -157 -390.7 -23.5 -377.1C110 -363.5 220 -277 293.7 -159.4" fill="rgba(100,100,100,0.15)" ></path></g>
        <g  transform="translate(507.8496430157111 466.78184413433723)"><path id="blob2" d="M258.6 -178.1C314.1 -53 323.8 69.7 273 180C222.3 290.3 111.1 388.2 -25.6 403C-162.4 417.8 -324.8 349.5 -388.7 231.6C-452.6 113.7 -418.1 -53.9 -337 -193.8C-255.8 -333.7 -127.9 -445.8 -13.2 -438.2C101.5 -430.6 203 -303.2 258.6 -178.1" fill="rgba(100,100,100,0.15)"></path></g>
      </svg>
    </div>
  );
};

export default About;
