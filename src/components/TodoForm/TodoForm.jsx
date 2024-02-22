import React, { useRef, useState } from 'react'
import "./TodoForm.css"
const TodoForm = ({globalDisable,setGlobalDisable, todos,setTodos}) => {
  
    const idCounter = useRef(0);
    const [todo,setTodo] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
    
        if(todo.trim()==="") return;
    
        const newTodo = {
          id : idCounter.current++,
          todo :  todo,
          isCompleted : false,
          isEdited : false,
        }
         setTodos((prev)=>([...prev,newTodo]));
         setTodo('')
    }

    const completeAllTodos = () =>{
      const newTodos = todos.map((todoItem)=>{
         return {...todoItem,isCompleted : true}
      })

      setTodos(newTodos);
    }
    const deleteAllTodos = () =>{
       setGlobalDisable(false);
       setTodos([]);
    }
    const uncompleteAllTodos = () =>{

      const newTodos = todos.map((todoItem)=>{
        return {...todoItem,isCompleted : false}
     })

      setTodos(newTodos);
    }
    
  return (
    <div className='form-wrapper'>
      <form onSubmit={submitHandler}>
          <input 
              type="text"
              placeholder='Enter Todo'
              value={todo} 
              onChange={(e)=> setTodo(e.target.value)} 
          />
          <button>Add Todo</button>
      </form>
      {
        todos.length>0 
        && 
        <div className="btn-container">
        {
          todos.every((todoItem)=> todoItem.isCompleted) ?
          <button onClick={uncompleteAllTodos} disabled={globalDisable} className={globalDisable ? "disabled" : ""}> Incomplete All Todos</button>
          :
          <button onClick={completeAllTodos} disabled={globalDisable} className={globalDisable ? "disabled" : ""}>Complete All Todos </button>
        }
        <button onClick={deleteAllTodos}>Delete All  Todos</button>
      </div>
      }
    </div>
  )
}

export default TodoForm;