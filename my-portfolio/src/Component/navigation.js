import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav(){
        return (
             
                <div className="flex justify-between font-bold bg-grey-400 items-center ml-8 py-8 ">
                    <NavLink to ='/portfolio'  className="text-3xl bg-slate-200  px-10 " > Portfolio</NavLink>
                    
                      <div className=" text-xl  font-medium text-black mr-8 space-x-4  ">
                        <NavLink to ='/' > Home</NavLink>
                        <NavLink to ='/about' > About</NavLink>
                        <NavLink to = '/projects'> Projects </NavLink>
                        <NavLink to ='/contact' > Contact </NavLink>
                       </div>
                    
                </div> 
        )
}








