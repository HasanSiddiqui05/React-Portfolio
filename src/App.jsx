import { useState, createContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ToggleButton from './components/ToggleButton';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('Light');

  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'Light' ? '#ffffff' : '#000000';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Router>
      <ToggleButton />
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default App;
