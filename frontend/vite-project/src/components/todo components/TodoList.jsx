import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


export default function TodoList({todos,setTodo,handleDelete,editMode,setEditMode,toggleEditMode,setEditTodo,editTodo,handleEdit}) {
   
    // function handleChange(e){
    //     setUpdateTask(e.target.value);
    // }
    return (
        <>
            <ul className="border mt-4 h-52 overflow-scroll scrollbar-thin ">
            {todos.map((todo,todoIndex)=>{
                return (
                        // <>
                        
                            <li className='flex items-center p-3 mt-3 w-80% rounded-lg border border-rose-300 justify-between' key={todoIndex}>

                                     
                                     {(editMode===todoIndex?<input type="text" value={editTodo} 
                                     onChange={(e)=>{
                                         setEditTodo(e.target.value);
                                     }}
                                     onKeyDown={(e)=>
                                        {
                                            if(e.key==='Enter'){
                                                 handleEdit(todoIndex)
                                                //  setEditTodo('');
                                            }
                                        }
                                    }></input>
                                      :<span>{todo}</span>)
                                    }
                                       
                                
                                <div className='flex items-center border w-[20%] h-[100%] justify-around'> 
                                        <button onClick={()=>{handleDelete(todoIndex)}}>
                                            <MdDeleteOutline className='text-xl'/>
                                        </button>
                                        <button onClick={()=>{
                                            toggleEditMode(todoIndex)
                                        }}>
                                            <FaRegEdit className='text-xl' />
                                        </button>
                                </div>
                            </li>
                        // </>
                )
            })}

            </ul>
        </>
    )

}
