import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
export default function TodoInput({handleClick,newTodo,setNewTodo}) {
   
    
    return (
        <>  
        <div className='sticky'>
            <h1 className='text-xl font-bold'>Todo</h1>
            <div className="border border-rose-500 p-3 flex justify-around rounded-lg ">
                <input className="w-[80%] bg-transparent border-none outline-none" placeholder="Enter todo..."
                        value={newTodo}
                         onChange={(e)=>setNewTodo(e.target.value)}
                         onKeyDown={(e)=>
                            {if(e.key==="Enter"&&newTodo){
                                handleClick()
                                setNewTodo('')
                            }}
                         }
                         />
                <button onClick={()=>
                { 
                    
                        handleClick()
                        setNewTodo('')
                    

                }} disabled={!newTodo}><IoMdAdd className=''/></button>
            </div>


        </div>
        </>
  )
}
