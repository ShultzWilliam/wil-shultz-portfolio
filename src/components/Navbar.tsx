import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <a className={`navbar-brand ${isDarkMode ? 'text-white' : 'text-black'}`} href="/">
          My Portfolio
        </a>
        <button
          className={`navbar-toggler ${isDarkMode ? 'border-white' : 'border-black'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
        </button>
        <div className={`collapse navbar-collapse ${isDarkMode ? 'text-white' : 'text-black'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-white' : 'text-black'}`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-white' : 'text-black'}`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-white' : 'text-black'}`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
