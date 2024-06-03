/* import react from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Home() {
        return (
           <div>    
            <div className='flex justify-center mt-32 min-h-screen'>
                <div >
                    <h1 className='text-4xl'>Front-End React <br /> Developer</h1>
                    <h1 className='mt-8'>Hi. I'm Masthan Shaik. A passionate Front-end React <br /> Developer based in</h1>
    
                    <div className='flex  mt-2 space-x-2'>
                        <IoLogoLinkedin />
                        <FaGithub />
                    </div>
                    
                        
                        <div className='flex'>
                        <h1 > Tech Stack  |</h1>
                        <img className='h-12  w-8 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBDpP5C5t_t8FjbMu-rjqndyjCmaoKMNTjA&usqp=CAU'/>
                        <img className='h-10 w-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMahxFw9p1LF2jUD3iLHbSfYvGeMhLm6dUw&usqp=CAU'/>
                        <img className='' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm8GHLl9_MvPWH8Eg3JWDU24rpWptxfpm_w&usqp=CAU'/>
                        <img className= '' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VYPeJQI1H_8Kbdw3QVfqY_dK_lY99_hK2Q&usqp=CAU'/>
                        </div>
                </div>
    
                <div className='px-8 mt-4'>
                    <img className="h-44 w-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTcYjpFst47NCVdXvFQ46VDsz5-VuIM19Cg&usqp=CAU" alt="ChitChat Logo" />
                </div>
            </div>
            </div>   
        );
    }





 
import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <div className='min-h-48 min-w-full  flex justify-center mt-32 gap-8'>
            <div className='flex flex-col  '>
                <h1 className='text-4xl font-bold '>Front-End React <br/>
    
                 <span className='flex '>
                        Developer 
                        <img className='h-8 w-8 mt-2 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0q7TUjRJA2HaN22zBrgzAwYVvnIIwn1pIw&usqp=CAU' alt="Developer Logo" />
                        
                    </span>
                    
                </h1>
                <h1 className='mt-8'>Hi. I'm Masthan Shaik. A passionate Front-end React <br /> Developer based in</h1>

                <div className='flex mt-8 space-x-2 '>
                    <IoLogoLinkedin className='min-h-6 min-w-6' />
                    <FaGithub  className='min-h-6 min-w-6' />
                </div>

                

            </div>

            <div className='px-8 mt-4'>
                <img className="h-44 w-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTcYjpFst47NCVdXvFQ46VDsz5-VuIM19Cg&usqp=CAU" alt="ChitChat Logo" />
            </div>
        </div>
    );
}



import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <div className='flex'>
            <div >
                <h1 >
                    Front-End React <br />
                    <span >
                        Developer
                        <img className='h-8 w-8 mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0q7TUjRJA2HaN22zBrgzAwYVvnIIwn1pIw&usqp=CAU' alt="Developer Logo" />
                    </span>
                </h1>
                <h1 >
                    Hi. I'm Masthan Shaik. A passionate Front-end React <br /> Developer based in
                </h1>
                <div className='flex mt-8 space-x-2'>
                    <IoLogoLinkedin className='min-h-6 min-w-6' />
                    <FaGithub className='min-h-6 min-w-6' />
                </div>
            </div>
            <div className='px-8 mt-4'>
                <img className="h-44 w-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTcYjpFst47NCVdXvFQ46VDsz5-VuIM19Cg&usqp=CAU" alt="ChitChat Logo" />
            </div>
        </div>
    );
}

*/

import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-col justify-center w-1/2 p-16 bg-white">
        <h1 className="text-5xl font-bold mb-4">HI THERE!</h1>
        <h2 className="text-6xl font-bold mb-4">
          I'M <span className="text-yellow-500">Mastan Shaik</span>
        </h2>
        <h3 className="text-lg font-medium mb-4">Front-End React | Developer </h3>
        
        <p className="text-gray-600 mb-4">
                        <img className='h-8 w-8 mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0q7TUjRJA2HaN22zBrgzAwYVvnIIwn1pIw&usqp=CAU' alt="Developer Logo" />        
             A passionate Front-end React <br /> Developer based in
        </p>

        <button className="bg-yellow-500 text-white py-2 px-4 rounded">MORE ABOUT ME</button>
      </div> 
      <div className="relative w-1/2 bg-gray-200"> 
      < img className="object-cover w-full " src="https://i.ibb.co/x2Xn2mk/IMG-0185-1.jpg" alt="IMG-0185-1" border="0" />
     
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 bg-yellow-500 rounded-full">
          <a href="https://www.linkedin.com/in/sk-masthan/" className="text-white"><IoLogoLinkedin className="h-6 w-6" /></a>
          <a href='/about' className='text-white'> <IoPerson className='h-6 w-6'/> </a>
          <a href="https://github.com/masthanskk" className="text-white"><FaGithub className="h-6 w-6" /></a>
          
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
}
