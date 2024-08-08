import { useEffect, useState } from "react"
import TodoInput from "./todo components/TodoInput"
import TodoList from "./todo components/TodoList"

function Todo() {
  const [todos,setTodo]=useState([]);
  const [editMode,setEditMode]=useState();
  const [newTodo,setNewTodo]=useState('');
  const [editTodo,setEditTodo]=useState('');
  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  // useEffect(()=>{
  //   const localTodos=JSON.parse(localStorage.getItem('todos'));
  //   if(!localStorage){
  //     return 
  //   }
  //   if(!localTodos){
  //     return
  //   }
  //   setTodo(localTodos)
    
  // },[]);
  function handleDelete(index){
    const newTodoList=todos.filter((todo,todoIndex)=>todoIndex!==index)
    setTodo(todos.filter((todo,todoIndex)=>todoIndex!==index))
    persistData(newTodoList)
  }
  //for toggling edit mode
  function toggleEditMode(index){
    let Index=todos.filter((todo,todoIndex)=>{
      todoIndex===index;
    })
      if((editMode===null)){
        setEditMode(index);
        
        console.log("on")
      }
      else{
        setEditMode(null);
        setEditTodo(todos[index]);
        // setEditTodo('');
        console.log("off")
      }
      
  }
  function handleClick(){
      const newTodoList=[...todos,newTodo];
      setTodo(newTodoList);
      persistData(newTodoList);
      console.log(todos);
  }

  function handleEdit(index){
    setTodo(
      prevStates=>
        prevStates.map((todo,todoIndex)=>
          todoIndex===index?editTodo:todo
        )
    );
    setEditMode(null);
  }
  return (
    <>
      <main>
        <TodoInput handleClick={handleClick} newTodo={newTodo} setNewTodo={setNewTodo} />
        <TodoList todos={todos} setTodo={setTodo} handleDelete={handleDelete} setEditMode={setEditMode} editMode={editMode} toggleEditMode={toggleEditMode} setEditTodo={setEditTodo} editTodo={editTodo} handleEdit={handleEdit}/>
      </main>
    </>
  )
}

export default Todo
