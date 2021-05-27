import { useDispatch, useSelector } from "react-redux"
import { counterINC } from "../../redux/actionCreators/counterAC"

function Counter () {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)


  return (
    <div>


      Counter: {counter}
      <button type="button" onClick={()=>dispatch(counterINC())} className="btn btn-danger mx-1">Change counter</button>
    </div>
  )
}

export default Counter