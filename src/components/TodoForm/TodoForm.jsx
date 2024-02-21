import React, { useRef, useState } from 'react'
import "./TodoForm.css"
const TodoForm = ({todos,setTodos}) => {
  
    const idCounter = useRef(0);
    const [todo,setTodo] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
    
        if(todo.trim()==="") return;
    
        const newTodo = {
          id : idCounter.current++,
          todo :  todo,
          isCompleted : false
        }
         setTodos((prev)=>([...prev,newTodo]));
         setTodo('')
    }
    
  return (
    <form onSubmit={submitHandler}>
        <input 
            type="text"
            placeholder='Enter Todo'
            value={todo} 
            onChange={(e)=> setTodo(e.target.value)} 
        />
        <button>Add Todo</button>
    </form>
  )
}

export default TodoForm;