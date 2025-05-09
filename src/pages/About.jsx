import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mx-auto h-screen flex justify-center items-center ${theme === 'Light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className='flex flex-col gap-3 mx-auto md:w-1/2'>
        <p>Hi, I'm Hasan Shahab Siddiqui, a passionate and driven Software Engineering student at Bahria University Karachi, currently pursuing my Bachelor's degree</p>
        <p>My journey into the world of technology began with a strong foundation in Pre-Engineering at PECHS Government Science College. Since then, I've developed a growing interest in building real-world software applications that solve meaningful problems.</p>
        <p>With hands-on experience in languages like C#, Java, Python, and JavaScript, I've worked on variety of projects. These projects have sharpened my technical abilities and deepened my understanding of software architecture, databases, and web development.</p>
        <p>Beyond coding, I'm always eager to improve my problem-solving, time management, and communication skills, all of which I consider essential for thriving in team environments and professional settings.</p>
        <p>I'm actively looking for opportunities where I can contribute my skills, continue learning, and grow as a software engineer.</p>
      </div>
    </div>
  )
}

export default About


