import React, { useState, useEffect, useContext } from 'react';
import Dummy from '../assets/Dummy-Img.png';
import { ThemeContext } from '../App';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const texts = [
    "I am a Software Engineering Student",
    "I am a C# ASP.NET Developer",
    "I am a Python Developer",
    "I am a Java Programmer",
    "I build Full-Stack Web Apps",
    "I work with the MERN Stack",
    "I am good with Object-Oriented Programming",
    "I am skilled in Database Management",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <div className={`mx-auto h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-16 p-5 sm:mb-0 mb-40 ${theme === 'Light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {/* Text Section */}
      <div className="text-center md:text-left md:mt-5">
        <h1 className="text-lg md:text-2xl font-bold">
          HI THERE 👋 I'M
        </h1>
        <h1 className={`text-4xl lg:text-5xl sl:text-6xl font-bold mt-2 ${theme === 'Light' ? 'text-blue-600': 'text-green-600'} `}>
          Hasan Shahab
          <span className="md:block"> Siddiqui</span>
        </h1>
        <p className="text-xl mt-4 max-w-md">
          A passionate <span className={`font-semibold ${theme === 'Light' ? 'text-blue-500': 'text-green-500'}`}>Software Engineer </span>
          with a knack for building efficient, scalable, and user-friendly applications.
        </p>

        {/* Typing Animation */}
        <div className={`text-xl font-mono  mt-2 ${theme === 'Light' ? 'text-blue-500': 'text-green-500'}`}>
          {displayText}
          <span className="blinking-cursor">|</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 md:mt-5 sm:mt-40 mt-32">
        <img
          src={Dummy}
          alt="Hasan Shahab Siddiqui"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
