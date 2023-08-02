// Skills.tsx
import React, { useState, useContext } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaVuejs, FaBootstrap, FaLess, FaPython, FaLinux, FaNetworkWired } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';
import { SiDotnet, SiVite } from 'react-icons/si'
import '../styles/Skills.less';
import ThemeContext from '../ThemeContext';

interface Skill {
  name: string;
  icon: React.ReactNode;
  usedIn: string[];
  shouldRemove?: boolean; // Add shouldRemove to the interface
}

const allSkills: Skill[] = [
    {
    name: 'HTML',
    icon: <FaHtml5 />,
    usedIn: ['Front-end Developer - Simplepart LLC','Coursework - University of Toledo','Personal Projects'],
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    usedIn: ['Front-end Developer - Simplepart LLC','Coursework - University of Toledo','Personal Projects'],
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    usedIn: ['Front-end Developer - Simplepart LLC','Coursework - University of Toledo','Personal Projects'],
  },
  {
    name: 'Vuejs',
    icon: <FaVuejs />,
    usedIn: ['Front-end Developer - Simplepart LLC','Personal Projects'],
  },
  {
    name: 'React',
    icon: <FaReact />,
    usedIn: ['Job 1', 'Job 2','Personal Projects'],
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    usedIn: ['Front-end Developer - Simplepart LLC','Personal Projects'],
  },
  {
    name: 'Less',
    icon: <FaLess />,
    usedIn: ['Front-end Developer - Simplepart LLC','Personal Projects'],
  },
  {
    name: '.NET',
    icon: <SiDotnet />,
    usedIn: ['Front-end Developer - Simplepart LLC','Coursework - University of Toledo'],
  },
  {
    name: 'Vite',
    icon: <SiVite />,
    usedIn: ['Personal Projects'],
  },
  {
    name: 'Python',
    icon: <FaPython />,
    usedIn: ['System Integrator - Meta','Coursework - University of Toledo','Personal Projects'],
  },
  {
    name: 'Linux',
    icon: <FaLinux />,
    usedIn: ['System Integrator - Meta','Coursework - University of Toledo','Personal Projects'],
  },
  {
    name: 'Networks',
    icon: <FaNetworkWired />,
    usedIn: ['System Integrator - Meta'],
  },
  {
    name: 'MS SQL',
    icon: <DiMsqlServer />,
    usedIn: ['Front-end Developer - Simplepart LLC'],
  }
];

const Skills: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedJob, setSelectedJob] = useState<string>('All Jobs');
  const [displayedSkills, setDisplayedSkills] = useState(allSkills);

  const handleJobChange = (job: string) => {
    setSelectedJob(job);
    if (job === 'All Jobs') {
      setDisplayedSkills(allSkills);
    } else {
      const filteredSkills = allSkills.map((skill) => {
        if (skill.usedIn.includes(job)) {
          return { ...skill, shouldRemove: false };
        } else {
          return { ...skill, shouldRemove: true };
        }
      });
      setDisplayedSkills(filteredSkills);
    }
  };

  return (
    <div className={`skills-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container-lad">
        <h2>Skills</h2>
        <div className={`job-dropdown ${isDarkMode ? 'dark' : 'light'}`}>
          <select className={`job-dropdown ${isDarkMode ? 'dark' : 'light'}`} value={selectedJob} onChange={(e) => handleJobChange(e.target.value)}>
            <option value="All Jobs">All Jobs</option>
            <option value="Front-end Developer - Simplepart LLC">Front-end Developer - Simplepart LLC</option>
            <option value="System Integrator - Meta">System Integrator - Meta</option>
            <option value="Coursework - University of Toledo">Coursework - University of Toledo</option>
            <option value="Personal Projects">Personal Projects</option>
          </select>
        </div>
      </div>
      <div className="skills-grid">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${isDarkMode ? 'dark' : 'light'} ${
              skill.shouldRemove ? 'fade-out' : 'fade-in'
            }`}
          >
            <div className="icon-wrapper">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
            <ul className="used-in">
              {skill.usedIn.map((job, jobIndex) => (
                <li key={jobIndex}>{job}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
