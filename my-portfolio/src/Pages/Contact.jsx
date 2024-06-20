
import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import SideBar from './sidebar/SideBar';

const Contact = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <SideBar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">CONTACT</h1>
        <p className="mb-4">Feel free to contact me!</p>
        <p className="mb-8 text-gray-600">
          If you have any questions, suggestions, or just want to say hello, do not hesitate to reach out.
          I'll try to respond as soon as possible.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <img src="" 
            alt="Computer" className="w-16 h-16 mx-auto mb-2" />
            <p>Web Design</p>
          </div>
          <div className="text-center">
            <img src="path_to_phone_icon" alt="Phone" className="w-16 h-16 mx-auto mb-2" />
            <p>+91-8519835763</p>
          </div>
          <div className="text-center">
            <img src="path_to_email_icon" alt="Email" className="w-16 h-16 mx-auto mb-2" />
            <p>shahul85198@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>THANKS FOR PATIENCE!</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center space-y-4 w-12 bg-yellow-500 text-white">
      <a href="https://www.linkedin.com/in/shahul-hameed85/" className="text-white"><IoLogoLinkedin className="h-6 w-6" /></a>
          <a href='/about' className='text-white'> <IoPerson className='h-6 w-6'/> </a>
          <a href="" className="text-white"><FaGithub className="h-6 w-6" /></a>
      </div>
    </div>
  );
};

export default Contact;
