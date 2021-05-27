import { useDispatch } from "react-redux"
import { changeStatus, deleteTodo } from "../../redux/actionCreators/todosAC"

function Todo({text, id, status, indx}) {

  const dispatch = useDispatch()

  



  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span className={status ? 'done' : ''}>
        {indx + 1}.&nbsp;{text}
      </span>
      <span>
        <button 
          type="button" 
          onClick={()=>dispatch(changeStatus(id)) } 
          className={`btn btn-${status ? 'secondary' : 'success'} mx-1`} >
            {status ? 'Undone' : 'Done'}
          </button>
        <button type="button" onClick={()=>dispatch(deleteTodo(id))} className="btn btn-danger mx-1">Delete</button>
      </span>
    </li>
  )
}

export default Todo