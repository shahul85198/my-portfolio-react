import React from 'react';

const Resume = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
        <img src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-xl">Home</a>
          <a href="/about" className="text-white text-xl">About Me</a>
          <a href="/resume" className="text-white text-xl">Resume</a>
          <a href="/portfolio" className="text-white text-xl">Portfolio</a>
          <a href="/testimonials" className="text-white text-xl">Testimonials</a>
          <a href="/contact" className="text-white text-xl">Contact</a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <header className="bg-gray-800 text-white p-6 mb-8">
          <h1 className="text-3xl">Shahul Hameed Shaik</h1>
          <p>Software Engineer, Hyderabad, India</p>
          <p>Email: <a href="mailto:shahul85198@gmail.com" className="text-blue-400">shahul85198@gmail.com</a> | Phone: +91-8897692954</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
          <p>Experienced React Engineer with 5.2 years of expertise in modern web technologies. Skilled in crafting resilient, responsive, and accessible user interfaces using JavaScript (ES6+), HTML5, CSS3,  React, React Router, Redux, Context API, and Hooks.</p>
          <p>Dedicated to advancing React development education, I foster collaborative, inclusive teams that prioritize pair programming and constructive code reviews. Committed to product excellence, I thrive on collaborating with product managers, designers, and back-end developers throughout the React Software Development Life Cycle (SDLC).</p>
          <p>My development methodology emphasizes automated testing, thorough documentation, and maintainable code. Proficient in Git, Webpack, Visual Studio Code, and Agile/Scrum methodologies, I am poised to contribute effectively as a team player in dynamic and innovative tech environments.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Front-End Development Mastery:</strong> Expertly architected and developed significant front-end projects using React, showcasing proficiency in modern JavaScript and React's component-based architecture.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>User-Centric Testing Excellence:</strong> Utilized user feedback to craft comprehensive end-to-end test suites, employing JavaScript expertise and React testing tools for testing, thus enhancing application reliability.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Effective Error Management:</strong> Implemented an advanced error-tracking system, leading to a substantial reduction in production bugs and highlighting adept problem-solving skills within the React ecosystem.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Boosting Developer Productivity:</strong> Tripled developer productivity through the development of a React-compatible design system and the adoption of a utility-first CSS architecture, showcasing proficiency in CSS3, HTML5, and scalable front-end practices.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Comprehensive React Ecosystem Proficiency:</strong> Demonstrated deep understanding and practical application of React features including Hooks, Context API, and Redux for efficient state management, thereby contributing to dynamic user interfaces.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Languages:</strong> Proficient in JavaScript (ES6+), HTML5, CSS3, TypeScript - crucial for robust React-based front-end architectures.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Frameworks/Libraries:</strong> Skilled in React, React Router, Bootstrap, Tailwind CSS, Material-UI - crafting responsive and dynamic user interfaces.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Tools:</strong> Experienced with Git, Webpack, Babel, ESLint, Visual Studio Code, NPM - tailored for efficient React project execution and maintenance.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>API Integration:</strong> Adept in integrating and managing RESTful APIs and JSON for seamless data exchange and enhanced application functionality in React projects.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Version Control:</strong> Experienced in Git, GitHub, and Bitbucket - facilitating collaborative and error-free coding practices in React projects.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Agile/Scrum Methodologies:</strong> Practiced in Agile and Scrum methodologies, fostering a team-oriented, flexible, and effective approach to React development project management.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <h3 className="text-xl font-bold mb-2">Trangla IT Solutions, Hyderabad (Jan 2020 - Present)</h3>
          <h4 className="font-bold mb-2">Role and Responsibilities:</h4>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Frontend Development: Specializing in ReactJS and NextJS, leading the creation of dynamic and responsive user interfaces.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Web Technologies Expertise: Utilizing JavaScript libraries, HTML, CSS, and JSON to enhance web application functionality and user experience.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Collaborative Development: Working closely with backend teams to ensure seamless integration of front-end and back-end technologies.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Responsive Design Implementation: Crafting web layouts that are adaptable to various devices and screen sizes, ensuring a seamless user experience.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Cross-Browser Compatibility: Ensuring that web applications function consistently across different browsers.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Code Maintenance: Writing clean, maintainable code and conducting regular code reviews to uphold high-quality standards.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Technical Problem-Solving: Identifying and resolving technical issues, enhancing the overall functionality of the applications.
            </li>
          </ul>

          <h4 className="font-bold mb-2">Projects:</h4>
          <h5 className="text-lg font-bold mb-1">Project 1: Screen Sharing</h5>
          <p><strong>Client:</strong> Trangla</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Project Description:</strong></p>
          <p>Contributed to the development of a React-based project by integrating a robust screen sharing feature, fostering seamless real-time collaboration among users, ensuring efficient transmission of audio, video, and screen data. Took charge of frontend components to facilitate intuitive session management, allowing users to initiate, control, and terminate screen sharing sessions effortlessly. Additionally, implemented optional backend functionality to incorporate authentication mechanisms and session tracking, enhancing security and user experience. This experience demonstrates proficiency in React development, real-time communication protocols, and backend integration, showcasing adaptability and technical acumen in delivering impactful solutions.</p>

          <h5 className="text-lg font-bold mb-1">Project 2: Job Board</h5>
          <p><strong>Client:</strong> Trangla</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Project Description:</strong></p>
          <p>The job board project implemented in React serves as a comprehensive platform for job seekers and employers alike. Through a user-friendly interface, job seekers can browse, filter, and apply for available positions. Employers can post job listings, manage applications, and interact with potential candidates. The project utilizes React to create dynamic and responsive user interfaces, ensuring a seamless experience for both job seekers and employers. Additionally, it incorporates features such as authentication, data storage, and integration with third-party APIs for enhanced functionality.</p>
          
          <h5 className="text-lg font-bold mb-1">Project 2: SquareMHCS </h5>
          <p><strong>Client:</strong> Trangla</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Project Description:</strong></p>
          <p>Square Medical and Health Care Services run by Ex-SERVICEMEN who served in Indian
Armed Forces for 20+ years in Fields. Square medical and Health care offers all major health
care services at the customer's doorstep.Actively involved in community outreach programs,
Square Medical promotes health awareness and accessibility to healthcare services, fostering
partnerships with stakeholders to broaden its impact, Square Medical continually evaluates and
enhances its service delivery processes to adapt to evolving client needs, ensuring that it
remains at the forefront of healthcare innovation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education History</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
            Mechanical Engineering from Nannapaneni Venkat Rao College of Engineering &
Technology in Year-2017 with 60%

            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
            MPC from Board of Intermediate Education in Year-2013 with 65.6%.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
            SSC from Board of Secondary Education in Year-2011 with 75%.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
