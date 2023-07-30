// Skills.tsx
import React, { useState, useContext } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { AiOutlineAntDesign } from 'react-icons/ai';
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
    name: 'React',
    icon: <FaReact />,
    usedIn: ['Job 1', 'Job 2'],
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    usedIn: ['Front-end development', 'Job 2', 'Job 3'],
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    usedIn: ['Web development projects', 'Job 1', 'Job 3'],
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    usedIn: ['Web development projects', 'Job 1', 'Job 2'],
  },
  {
    name: 'Node.js',
    icon: <IoLogoNodejs />,
    usedIn: ['Server-side development', 'Job 2'],
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb />,
    usedIn: ['Database management', 'Job 1'],
  },
  {
    name: 'MySQL',
    icon: <DiMysql />,
    usedIn: ['Database management', 'Job 3'],
  },
  {
    name: 'Ant Design',
    icon: <AiOutlineAntDesign />,
    usedIn: ['Web development projects', 'Job 1', 'Job 2'],
  },
  // Add more skills as needed
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
      <h2>Skills</h2>
      <div className="job-dropdown">
        <select value={selectedJob} onChange={(e) => handleJobChange(e.target.value)}>
          <option value="All Jobs">All Jobs</option>
          <option value="Job 1">Job 1</option>
          <option value="Job 2">Job 2</option>
          <option value="Job 3">Job 3</option>
        </select>
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
