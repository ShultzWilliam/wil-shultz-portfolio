import React, { useContext } from 'react';
import '../styles/Experience.less'; // Use Less for custom styling
import ThemeContext from '../ThemeContext';

const Experience: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Sample data for experience cards (replace with your own data)
  const experiences = [
    {
      company: 'Simplepart LLC',
      position: 'Front-End Developer',
      duration: 'September 2022 - Present',
      description: 'Creating modern e-commerce web applications for automobile OEMS and dealership. Consistently delivering new sites for clients such as Subaru, BMW, Kia, and more in an agile SDE.',
      skills: ['HTML', 'CSS', 'JS', 'Vuejs', 'Bootstrap', 'Less', '.NET', 'MSSQL'],
      links: [
        { text: 'SimplePart Home', link: 'https://www.simplepart.com/' },
        { text: 'Lexus Parts Site', link: 'https://parts.lexus.com/' }
      ]
    },
    {
      company: 'Meta Reality Labs',
      position: 'System Integrator',
      duration: 'March 2022 - July 2022',
      description: 'Created automation tools and scripts for virtual reality research projects. Performed research analysis to constantly reduce roadblocks and improve data collection on large scale computer networks.',
      skills: ['Python', 'Powershell', 'Bash', 'Linux', 'Computer Networking', 'Root-cause analysis'],
      links: [
        { text: 'Meta Reality Labs Site', link: 'https://about.meta.com/realitylabs/' }
      ]
    }
    // Add more experiences as needed
  ];

  return (
    <div id='Experience' className={`experiences-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Work Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div key={index} className={`experience-card ${isDarkMode ? 'dark' : 'light'}`}>
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
            <div className="skills">
              <p className='skill words'> {experience.skills.join(' ')}</p>
            </div>
            <div className="experience-buttons">
              {experience.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-button"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
