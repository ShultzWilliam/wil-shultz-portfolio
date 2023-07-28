import React, { useContext } from 'react';
import '../styles/Experience.less'; // Use Less for custom styling
import ThemeContext from '../ThemeContext';

const Experience: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Sample data for experience cards (replace with your own data)
  const experiences = [
    {
      company: 'Example Company 1',
      position: 'Front-End Developer',
      duration: 'June 2019 - Present',
      description: 'Responsible for building modern web applications using React and TypeScript.',
    },
    {
      company: 'Example Company 2',
      position: 'Software Engineer',
      duration: 'January 2017 - May 2019',
      description: 'Worked on developing backend systems using Node.js and Express.',
    },
    {
      company: 'Example Company 3',
      position: 'UI/UX Designer',
      duration: 'July 2015 - December 2016',
      description: 'Designed user interfaces and created wireframes for web and mobile applications.',
    },
    // Add more experiences as needed
  ];

  return (
    <div className={`experiences-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Work Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div key={index} className={`experience-card ${isDarkMode ? 'dark' : 'light'}`}>
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
