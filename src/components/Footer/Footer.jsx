
import "./Footer.css"
const Footer = ({todos}) => {

  const total =  todos.reduce((tot,todo)=>todo.isCompleted ?  tot+1 :  tot,0);

  return (
    <footer>
        <p>Total Tasks : {todos.length} </p>
        <p>Completed  Tasks : {total}</p>
    </footer>
  )
}

export default Footer