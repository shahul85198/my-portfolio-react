// import react from 'react'

// export default function About(){
//         return (
//                 <div className=' m-4'>
//                         <div>

//                        <p className='bg-red'> Frontend React JS Developer: 
//                          Passionate and results-driven frontend developer with over four years of experience specializing in React JS.<br/>
//                         Proficient in crafting modern, responsive web applications with a keen eye on user experience and performance optimization.<br/>
//                         Demonstrated expertise in front-end development, state management, and seamless integration of RESTful APIs. <br/>
//                         Adept at translating design mockups into flawless UI implementations and maximizing application efficiency.
//                        </p>
//                        </div>

//                     <h1> Key Skills: <br/>
        
//         <ul>
 
//         <li>  React JS | JavaScript | HTML5 | CSS3 </li>
//         <li>  Redux | Context API | Hooks  </li>
//         <li> RESTful APIs | Asynchronous Request Handling </li>
//         <li>  Babel | Git | GitHub </li>
//         <li>  UI/UX Design </li>

//        </ul>
//       </h1>


//       <div className='pt-4 m-4'>

//          <h2>
//          Responsibilities and Achievements: <ul>
                       
//          <li> Developed and maintained dynamic, responsive web applications using React JS, ensuring superior user experiences and optimized performance.</li>  
//          <li> Collaborated closely with design and backend teams to implement front-end functionality and integrate with APIs.</li>  
//          <li> Utilized state management libraries (such as Redux) to manage complex application states and streamline data flow.</li>  
//          <li> Implemented responsive designs, ensuring cross-browser compatibility and a consistent user experience across devices.</li>  
//          <li> Conducted code reviews and providing constructive feedback to optimize code quality, maintainability, and scalability.</li>  
//          <li> Actively participated in Agile development methodologies, contributing to sprint planning, stand-ups, and retrospectives for efficient project execution.</li>  
//          <li> Stayed up-to-date with the latest frontend technologies, trends, and best practices to continuously improve skills and deliver innovative solutions. </li>  

//          </ul>
//         </h2>
//         </div>
//                  </div>
//         )
// }

import React from 'react';


export default function About() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
      <img 
       className="h-24 w-24 rounded-full mb-4"
       src="https://i.ibb.co/6HcHYNX/My-Image.jpg"
       alt="My-Image" border="0" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-lg">Home</a>
          <a href="/about" className="text-white text-lg">About Me</a>
          <a href="/resume" className="text-white text-lg">Resume</a>
          <a href="/portfolio" className="text-white text-lg">Portfolio</a>
          <a href="/testimonials" className="text-white text-lg">Testimonials</a>
          <a href="/contact" className="text-white text-lg">Contact</a>
        </nav>
      </div>

      {/* Main Content */}
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
