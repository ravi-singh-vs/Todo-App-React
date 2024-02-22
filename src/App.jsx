import React, { useRef, useState } from 'react'
import "./App.css"
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodosList from './components/TodosList/TodosList';
import Footer from './components/Footer/Footer';

const App = () => {

  const [todos , setTodos] = useState([]); 
  const [globalDisable ,setGlobalDisable] = useState(false);
  return (
    <div className='App'>
       <Header/>
       <div>
         <TodoForm globalDisable={globalDisable} setGlobalDisable={setGlobalDisable} todos={todos} setTodos={setTodos}/>
         <TodosList globalDisable={globalDisable} setGlobalDisable={setGlobalDisable} todos={todos} setTodos={setTodos}/>
       </div>
       <Footer todos={todos}/>
    </div>
  )
}

export default App