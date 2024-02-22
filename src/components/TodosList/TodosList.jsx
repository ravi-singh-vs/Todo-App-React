import React from 'react'
import "./TodosList.css"
import TodoCard from "../TodoCard/TodoCard"
const TodosList = ({globalDisable,setGlobalDisable,todos , setTodos}) => {

    const taskCompletionHandler = (id) =>{

        const todosList = todos.map((todoItem)=>{
          if(todoItem.id===id)
          {
            return {...todoItem , isCompleted : !todoItem.isCompleted}
          }
          return todoItem;
        })
      
        setTodos(todosList);
      
      }
      const deleteHandler = (id) =>{
    
        const res = confirm("Proceed to delete ? ");
    
        if(!res) return;
    
        const newTodos = todos.filter((todoItem)=> todoItem.id!==id);
    
        setTodos([...newTodos]);
      }
    
      const editHandler = (id,editedTodo) =>{
        
       const todosList = todos.map((todoItem)=>{
          if(todoItem.id===id)
          {
            return {...todoItem , todo : editedTodo, isEdited : true};
          }
          return todoItem;
       })
      
       setTodos(todosList);
      
      }
  return (
    <div className="todo-container">
      {
        todos.map((todoItem)=> <TodoCard key={todoItem?.id} {...todoItem} taskCompletionHandler={taskCompletionHandler}  deleteHandler={ deleteHandler} editHandler={editHandler} globalDisable={globalDisable}  setGlobalDisable={setGlobalDisable} />)
      }
    </div>
  )
}

export default TodosList