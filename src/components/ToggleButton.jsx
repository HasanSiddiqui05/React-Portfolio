import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Sun, Moon } from 'lucide-react'; 

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`fixed md:right-8 bottom-4 right-4 z-50 p-3 rounded-full text-white shadow-lg transition cursor-pointer ${
        theme === 'Light' ? 'bg-black hover:bg-gray-600' : 'bg-white hover:bg-gray-400'
      }`}
    >
      {theme === 'Light' ? <Moon size={24} /> : <Sun size={24} color="black" />}
    </button>
  );
};

export default ToggleButton;
