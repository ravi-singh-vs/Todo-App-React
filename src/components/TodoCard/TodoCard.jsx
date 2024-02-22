import React, { useRef, useState } from 'react'
import "./TodoCard.css"
const TodoCard = ({id ,isCompleted, isEdited, todo,taskCompletionHandler , deleteHandler,editHandler, globalDisable,setGlobalDisable}) => {

  const [editedTodo , setEditedTodo] = useState(todo);

  const [editMode , setEditMode] = useState(false);



  const edit = () =>{

    setEditMode(false);
    setGlobalDisable(false);

    const res = confirm("Do you want to edit this todo ? ");

    if(!res || !editedTodo.trim()){
      setEditedTodo(todo);
      return;
    }
    
    editHandler(id,editedTodo);
  }

  const cancelHandler = () =>{
    setEditMode(false);
    setGlobalDisable(false);
    setEditedTodo(todo);
   return;
  }

  const deleteTodoCard = () =>{

    if(editMode)
    {
      setEditMode(false);
      setGlobalDisable(false);
    }

    deleteHandler(id)
  }

  return (
    <div className='todo-card'>

       <div className="todo-content">
         <input 
           type="checkbox" 
           value={isCompleted}  
           checked={isCompleted}
           onChange={()=> taskCompletionHandler(id)}
           disabled = {editMode || globalDisable}
           className={editMode || globalDisable ? "disabled" : ""}
         />
          {
            editMode ? 
            <input type='text' value={editedTodo} onChange={(e)=> setEditedTodo(e.target.value)} />
             : 
             <>
             <p className={isCompleted ? "cut" : ""}>{todo}</p>
             {
               isEdited && <span className='edited-tag'>Edited</span>
              } 
             </>
             
          }
       </div>
       <div className='todo-card-btn-container'>
        {
          editMode 
           ? 
           <>
            <button onClick={cancelHandler}>
              Cancel
            </button>
            <button type='click' 
            disabled={!editedTodo.trim() || (todo===editedTodo)} 
            className={!editedTodo.trim()|| (todo===editedTodo) ? "disabled" : ""} 
            onClick={edit}
            >
              Save Edit
            </button>  

           
           </>
          
           :
           <button type='click' disabled={globalDisable}  className={globalDisable ? "disabled" : ""} onClick={()=> {
            setEditMode(true);
            setGlobalDisable(true)
           }}>Edit</button>
        }
         <button type='click' onClick={()=> deleteTodoCard(id)}>Delete</button>
       </div>

        
    </div>
  )
}

export default TodoCard