import React from "react";
import SideBar from "./sidebar/SideBar";

export default function Testimonials(){
    return(
        <div className="flex h-screen bg-white">
            <SideBar />

            <div className="w-3/4 p-4 mr-32 mt-4">
                <div className="bg-slate-300 rounded-s-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold min-h-20 mb-4 text-gray-800">Shahul Hameed Shaik</h1>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-600">
                        Front End Developer, 
                        <a href='https://trangla.com/' alt='' className="text-blue-600"> Trangla Innovations pvt Ltd </a>
                    </h2>

                    <h3 className="w-3/4 text-gray-700"> 
                       - With 5.2 years of experience as a Front End Developer specializing in React.js, 
                        I have successfully completed three major projects at Trangla IT Company, along with two personal projects.
                        At Trangla, I have had the opportunity to work on innovative projects that pushed my boundaries and allowed 
                        me to develop robust, user-friendly applications. My passion for creating seamless and intuitive user experiences 
                        drives me to produce high-quality, maintainable code and achieve exceptional project outcomes.
                        I am proud of my contributions to Trangla and look forward to continuing my journey in crafting superior front-end solutions. 
                        Trangla provides a supportive environment and a commitment to excellence, which I highly value.
                    </h3>
                </div>
            </div>
        </div>
    )
}
