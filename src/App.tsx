import { useState } from 'react';
import './styles/App.less'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ThemeContext from './ThemeContext'
import Toggle from './components/Toggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <About />
        <div className="transition top"></div>
        <Experience />
        <div className="transition bot"></div>
        <Skills />
        <div className="transition top"></div>
        <Contact />
        <Toggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;