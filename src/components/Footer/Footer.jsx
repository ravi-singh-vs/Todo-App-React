
import "./Footer.css"
const Footer = ({todos}) => {

  const total =  todos.reduce((tot,todo)=>todo.isCompleted ?  tot+1 :  tot,0);

  return (
    <footer>
        <p>Total Todos : {todos.length} </p>
        <p>Completed Todos : {total}</p>
    </footer>
  )
}

export default Footer