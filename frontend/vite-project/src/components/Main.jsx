import React from "react";
import Todo from "./Todo";
import HabitTracker from "./HabitTracker";
import Journal from "./Journal";
import stopWatch from "./Stopwatch";
const Body =()=>{
    return (
    <>
        <div className="bg-gradient-to-r pt-36 from-pink-200 gap-10 to-blue-200 h-[100%]">
            <div className="grid grid-cols-2">
                    {/* todo */}
                    <div className="w-[90%] h-[70vh] m-4 rounded-2xl border bg-blue-50 shadow-lg shadow-slate-500 p-4">
                        
                        <Todo/>
                    </div>
                    {/* pomodoro */}
                    <div className="w-[90%] h-80 m-4 rounded-2xl border bg-blue-50 shadow-lg shadow-slate-500 p-4">
                       
                        
                    </div>
                    {/* stopwatch */}
                    <div className="w-[90%] h-80 m-5 rounded-2xl border bg-blue-50 shadow-lg shadow-slate-500 p-4">
                        <stopWatch/>
                    </div>
            </div>      
            {/* <div className="grid grid-cols-2 ">
            
                {/* Habit  }
                <div className="w-[80%] h-auto m-5 rounded-2xl border bg-blue-50 shadow-lg shadow-slate-500 p-5">
                    <HabitTracker/> 
                </div>
                <div className="w-[95%] h-auto m-5 rounded-2xl border bg-blue-50 shadow-lg shadow-slate-500 p-4">
                    <Journal/>

                </div>
            </div> */}
            
        </div>          

    </>
    )
}
export default Body;