import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/todosTypes";


const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    case CHANGE_STATUS:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

    default:
      return state
  }
}

export default todosReducer