import React from 'react';

export default function SideBar() {
  return (
    <div className="w-1/4 bg-gray-700 flex flex-col items-center py-8">
      <img
        className="h-24 w-24 rounded-full mb-4"
        src="https://i.ibb.co/dGF1gWy/IMG-20210518-shahul.jpg"
        alt="Profile Picture"
      />
      <nav className="flex flex-col space-y-4">
        <a href="/" className="text-white text-lg">Home</a>
        <a href="/about" className="text-white text-lg">About Me</a>
        <a href="/resume" className="text-white text-lg">Resume</a>
        <a href="/portfolio" className="text-white text-lg">Portfolio</a>
        <a href="/testimonials" className="text-white text-lg">Testimonials</a>
        <a href="/contact" className="text-white text-lg">Contact</a>
      </nav>
    </div>
  );
}
