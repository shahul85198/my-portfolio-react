import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
      <img  className="h-24 w-24 rounded-full mb-4" src="https://i.ibb.co/dGF1gWy/IMG-20210518-shahul.jpg" alt="Portfolio Item" border="0" />
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
        <h1 className="text-5xl font-bold">MY-PORTFOLIO</h1>
        
        <div className="flex space-x-8 text-lg">
          <a href='' className="text-gray-900 font-bold">All</a>
          <a href='' className="text-gray-600">Graphic Design</a>
          <a href='' className="text-gray-600">Web Design</a>
          <a href='' className="text-gray-600">Photography</a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <img 
            className="object-cover h-48 w-full" 
            src="https://via.placeholder.com/150" 
            alt="Portfolio Item" 
          />
          <img 
            className="object-cover h-48 w-full" 
            src="https://via.placeholder.com/150" 
            alt="Portfolio Item" 
          />
          <img 
            className="object-cover h-48 w-full" 
            src="https://via.placeholder.com/150" 
            alt="Portfolio Item" 
          />
          <img 
            className="object-cover h-48 w-full" 
            src="https://via.placeholder.com/150" 
            alt="Portfolio Item" 
          />
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 bg-yellow-500 rounded-l">
          <a href="#linkedin" className="text-white"><IoLogoLinkedin className="h-6 w-6" /></a>
          <a href="#github" className="text-white"><FaGithub className="h-6 w-6" /></a>
          
        </div>
      </div>
    </div>
  );
}
