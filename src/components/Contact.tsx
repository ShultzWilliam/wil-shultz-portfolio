import React, { useContext } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.less';
import ThemeContext from '../ThemeContext'; // Make sure to import the ThemeContext

const Contact: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext); // Get the isDarkMode value from the context

  const email = 'william.shultz2017@gmail.com';
  const githubUrl = 'https://github.com/ShultzWilliam';
  const linkedinUrl = 'https://www.linkedin.com/in/wilshultz';

  return (
    <div id='Contact' className={`contact-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Contact info</h2>
      <p>
        Wanna get in touch? If so, please feel free to send me an email or a message on LinkedIn/GitHub,
        and I look forward to hearing from you :)
      </p>
      <div className="contact-buttons">
        <a href={`mailto:${email}`} className={`contact-button ${isDarkMode ? 'dark' : 'light'}`}>
          <FaEnvelope className="button-icon" />
          Email
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`contact-button ${isDarkMode ? 'dark' : 'light'}`}>
          <FaGithub className="button-icon" />
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`contact-button ${isDarkMode ? 'dark' : 'light'}`}>
          <FaLinkedin className="button-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
