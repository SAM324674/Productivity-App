import React from "react";
import { FaRegUser } from "react-icons/fa";
const Navbar =()=>{
    return (
        <>
            <nav className="justify-between fixed items-center flex h-20 w-full p-5 bg-blue-100 border-b-slate-400 border-b-2"> 
               
                <a href="#"><span className="font-bold text-3xl">Kawaii Productivity</span></a>
                <div className="flex  w-[30%] justify-evenly border border-black">
                        <div className="flex w-[90%] border border-black justify-evenly">
                            <a href="#" className="text-lg font-semibold">Home</a>
                            <a href="#" className="text-lg font-semibold">Focus</a>
                            <a href="#" className="text-lg font-semibold">Journal</a>
                            <a href="#" className="text-lg font-semibold">Habit</a>
                        </div>
                        <div className="flex justify-center items-center"><FaRegUser /></div>
                </div>
                

            </nav>
        </>

    )
}

export default Navbar