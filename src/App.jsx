import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodosList from './components/TodosList/TodosList';
import Footer from './components/Footer/Footer';

const App = () => {

  const [todos , setTodos] = useState([]); 
  
  return (
    <div className='App'>
       <Header/>
       <div>
         <TodoForm todos={todos} setTodos={setTodos}/>
         <TodosList todos={todos} setTodos={setTodos}/>
       </div>
       <Footer todos={todos}/>
    </div>
  )
}

export default App