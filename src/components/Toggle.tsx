import React, { useContext } from 'react';
import '../styles/Toggle.less';
import ThemeContext from '../ThemeContext';

const Toggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Toggle;
