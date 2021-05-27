import { useSelector } from "react-redux"
import { useTodosContext } from "../../contexts/todosContext"
import Todo from "../Todo/Todo"


function List() {
  console.log('Render component List')

  const todos = useSelector(state => state.todos)



  console.log('From List component ', todos)

  return (
    <ul className="list-group">
      {
        todos.length ? 
          todos.map((todo, indx) => <Todo  key={todo.id} text={todo.text} indx={indx} id={todo.id} status={todo.completed} />)
          : <p>Nothing to do</p>
      }
      
    </ul>
  )
}

export default List