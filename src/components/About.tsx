import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import '../styles/About.less'; // Import the Less file

const About: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div id='About' className={`about-me-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="main-section">
        <h1>Some Dev Dude</h1>
        <p className="subtitle">Front-End Developer I guess</p>
        <p>
          This is some very interesting lorem ipsum text. Typing this out,
          I realize - I honestly don't remember any of the lorem ipsum text.
        </p>
      </div>
    </div>
  );
};

export default About;
