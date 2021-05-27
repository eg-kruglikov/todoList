import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/todosTypes"


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text,
      completed: false
    }
  }
}

export const addTodoFromServer = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id
  }
}