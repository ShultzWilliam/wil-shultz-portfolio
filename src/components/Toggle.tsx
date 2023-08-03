import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // You can choose different icons from different icon sets as needed
import '../styles/Toggle.less';
import ThemeContext from '../ThemeContext';

const Toggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </button>
  );
};

export default Toggle;
