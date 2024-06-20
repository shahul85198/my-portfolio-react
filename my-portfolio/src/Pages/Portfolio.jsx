
import React from 'react';
import SideBar from './sidebar/SideBar';
export default function Portfolio() {
  
    return (
      <div className=" flex min-h-screen">
      <SideBar />
       

        <div className="w-3/4 p-8 bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
                <p className="text-lg text-gray-600">Showcasing 5.2 Years of Front-End Development Excellence</p>
            </header>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-700">
                    Hi, I'm Shahul Hameed Shaik, a passionate Front-End Developer with 5.2 years of experience in creating dynamic, responsive, and user-friendly web applications. With a strong background in React.js and a keen eye for design, I have successfully delivered numerous projects that enhance user experiences and meet business goals.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h2>
                <ul className="list-disc  list-inside text-gray-700">
                    <li>HTML5</li>
                    <li>CSS3 & SCSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>React Router</li>
                    <li>REST APIs</li>
                    <li>Redux</li>
                    <li>React Hooks</li>
                    <li>Context API</li>
                    <li>TypeScript</li>
                    <li> NPM </li>
                    <li>Next.js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                    <li>Web Accessibility</li>
                    <li>Version Control (Git)</li>
                    <li>Agile Methodologies</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Professional Experience</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Trangla IT Company (Current)</h3>
                    <p className="text-gray-600">Position: Front-End Developer<br />Duration: [jan - 2019] – Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Develop and maintain user-friendly web applications using React.js.</li>
                        <li>Collaborate with designers and back-end developers to create seamless UI/UX.</li>
                        <li>Optimize applications for maximum speed and scalability.</li>
                        <li>Implement responsive designs ensuring compatibility across various devices and browsers.</li>
                        <li>Participate in code reviews and agile ceremonies.</li>
                    </ul> <br/>
                    <h4 className="text-xl font-bold text-gray-800 mt-4">Key Projects:</h4> <br/>

                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">Project Alpha:</h5>
                        <p className="text-gray-700">
                            - Description: A comprehensive e-commerce platform with real-time data processing.<br />
                            - Technologies: React.js, Redux, Tailwind CSS, Firebase.<br />
                            - Achievements: Increased user engagement by 30% through enhanced UI/UX design.
                        </p>
                        <h5 className="text-lg font-bold text-gray-800 mt-4">Project Beta:</h5>
                        <p className="text-gray-700">
                            - Description: An internal dashboard for monitoring company metrics and KPIs.<br />
                            - Technologies: React.js, D3.js, SCSS.<br />
                            - Achievements: Improved data visualization and reporting accuracy.
                        </p>
                    </div>
                </div>

                <div className="bg-white border shadow-lg rounded-2xl p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Personal Projects:</h3> <br/>
                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">MyPortfolio Website:</h5>
                        <p className="text-gray-700">
                            - Description: A personal website to showcase my projects and skills.<br />
                            - Technologies: React.js, Tailwind CSS.<br />
                            - Achievements: Demonstrated proficiency in modern web development practices.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects Showcase</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Project 1: E-commerce Platform</h3>
                    <p className="text-gray-700">
                        - Description: Developed a full-featured e-commerce website with user authentication, product management, and payment gateway integration.<br />
                        - Technologies: React.js, Redux, Node.js, MongoDB, Stripe API.<br />
                        - Role: Front-End Developer<br />
                        - Highlights: Designed an intuitive user interface that boosted sales conversion by 25%.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Project 2: Real-Time Chat Application</h3>
                    <p className="text-gray-700">
                        - Description: Built a real-time chat application with private and group messaging features.<br />
                        - Technologies: React.js, Socket.io, Express.js, MongoDB.<br />
                        - Role: Full Stack Developer<br />
                        - Highlights: Ensured smooth real-time communication with a scalable architecture.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Project 3: SquareMHCS</h3>
                    <p className="text-gray-700">
                        - Description: Created a personal finance tracker to help users manage their expenses and savings.<br />
                        - Technologies: React.js, Redux, Firebase.<br />
                        - Role: Front-End Developer<br />
                        - Highlights: Implemented data visualization features to track spending patterns.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        - "Shahul's expertise in React.js transformed our project. His attention to detail and commitment to quality are unmatched." – John Doe, CEO of Trangla IT Company.<br />
                        - "Working with Shahul was a pleasure. He brought innovative solutions to the table and delivered beyond our expectations." – Jane Smith, Project Manager.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        Degree: B Mechanical Engineering<br />
                        Institution: [Nannapaneni Venkat Rao College of Engineering &
                          Technology]<br />
                        Graduation Year: [2017]
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Certifications</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        React Developer Certification<br />
                        Issued by: [Certification Authority]
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        Email: [shahul85198@gmail.com]<br />
                      <a href="https://www.linkedin.com/in/shahul-hameed85/">  LinkedIn: [Shahul Hameed] </a> <br />
                      <a href="">  GitHub: [Your GitHub Profile] </a>
                    </p>
                </div>
            </section>
        </div>
        </div>
    );
}
