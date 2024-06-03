

import React from 'react';


export default function About() {
  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
      <img 
       className="h-24 w-24 rounded-full mb-4"
       src="https://i.ibb.co/dGF1gWy/IMG-20210518-shahul.jpg"
       alt="Profile Picture" border="0" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-lg">Home</a>
          <a href="/about" className="text-white text-lg">About Me</a>
          <a href="/resume" className="text-white text-lg">Resume</a>
          <a href="/portfolio" className="text-white text-lg">Portfolio</a>
          <a href="/testimonials" className="text-white text-lg">Testimonials</a>
          <a href="/contact" className="text-white text-lg">Contact</a>
        </nav>
      </div>

      <div className="w-3/4 p-16 bg-gray-100 flex flex-col space-y-8">
        <h1 className="text-5xl font-bold">ABOUT ME</h1>
        <h2 className="text-2xl font-bold">
          I'm <span className="text-yellow-500">Mathan Shaik </span>, Front-End / Developer
        </h2>
        <p className="text-gray-700">
        Passionate and results-driven frontend developer with over four years of experience specializing in React JS. Proficient in crafting modern, responsive web applications with a keen eye on user experience and performance optimization.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8">
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">4</h3>
            <p>Projects Done</p>
          </div>
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">3+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">87</h3>
            <p>Followers</p>
          </div>
        </div>

        {/* What I Do */}
        <div>
          <h3 className="text-2xl font-bold mb-4">What I Do?</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500 font-bold mr-2">➤</span> 
              Print Design
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 font-bold mr-2">➤</span> 
              Web Design
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 font-bold mr-2">➤</span> 
              Photography
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
