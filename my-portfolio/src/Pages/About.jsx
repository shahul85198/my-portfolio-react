import React from 'react';
import SideBar from './sidebar/SideBar';

export default function About() {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <div className="w-3/4 p-16 bg-gray-100 flex flex-col space-y-8">
        <h1 className="text-5xl font-bold">ABOUT ME</h1>
        <h2 className="text-2xl font-bold">
          I'm <span className="text-yellow-500">Shahul Hameed Shaik </span>, Front-End / Developer
        </h2>
        <p className="text-gray-700">
          Passionate and results-driven frontend developer with over 5.2 years of experience specializing in React JS. Proficient in crafting modern, responsive web applications with a keen eye on user experience and performance optimization.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8">
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">3</h3>
            <p>Projects Done</p>
          </div>
          <div className="bg-black text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">1+</h3>
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
              <span className="text-yellow-500 flex mr-2">➤</span>
              <p className="text-black">Seasoned Frontend Developer with 5.2 years of experience in React.js, specializing in building responsive, high-performance web applications. Proficient in state management, API integration, and performance optimization. Adept at collaborating with cross-functional teams to deliver exceptional user experiences.</p>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 flex mr-2">➤</span>
              <p className="text-black">As a frontend developer with 5.2 years of experience in React, I have extensively utilized modern styling tools and frameworks such as Tailwind CSS, Bootstrap, and CSS-in-JS libraries like styled-components to create visually appealing and responsive user interfaces. I have a strong proficiency in writing clean and maintainable CSS, integrating design systems, and ensuring cross-browser compatibility. Additionally, I collaborate closely with UX/UI designers to implement pixel-perfect designs, enhancing the overall user experience.</p>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 font-bold mr-2">➤</span>
              <p className="text-black">Photography</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

