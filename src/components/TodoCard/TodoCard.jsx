import React, { useRef, useState } from 'react'
import "./TodoCard.css"
const TodoCard = ({id ,isCompleted,todo,taskCompletionHandler , deleteHandler,editHandler}) => {

  const [editedTodo , setEditedTodo] = useState(todo);

  const [editMode , setEditMode] = useState(false);


  const edit = () =>{
    setEditMode(false);
    editHandler(id,editedTodo);
  }

  return (
    <div className='todo-card'>
       <div className="todo-content">
         <input 
           type="checkbox" 
           value={isCompleted}  
           onChange={()=> taskCompletionHandler(id)}
         />
          {
            editMode ? 
            <input type='text' value={editedTodo} onChange={(e)=> setEditedTodo(e.target.value)} />
             : 
            <p className={isCompleted ? "cut" : ""}>{todo}</p>
          }
       </div>
       <div className='btn-container'>
        {
          editMode 
           ? 
           <button type='click' onClick={edit}>Save Edit</button>  
           :
           <button type='click' onClick={()=> {

            setEditMode(true);

           }}>Edit</button>
        }
         <button type='click' onClick={()=> deleteHandler(id)}>Delete</button>
       </div>
        
    </div>
  )
}

export default TodoCard