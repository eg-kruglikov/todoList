import { createContext, useState, useEffect, useCallback, useContext, useMemo } from "react";


const todosContext = createContext()


const addHandlerContext = createContext()

const expensiveCalculation = () => {
  let tmp
  for (let i = 0; i < 1e8; i += 1) {
    tmp = Math.random()
  }
  return tmp
}

const TodosContextProvider = ({children}) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/todos')
      .then(res => res.json())
      .then(todosFromServer => setTodos(todosFromServer))
  }, [])

  const countOfDone = todos.filter(todo => todo.completed).length

  const addHandler = useCallback(
    (text) => {
      fetch('http://localhost:3000/api/v1/todos',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
      })
      .then(response => response.json())
      .then(newTodoFromServer => setTodos(prev => [...prev, newTodoFromServer ]
      ))
    },
    [],
  )

  const changeStatusHandler = (id) => {
    fetch('http://localhost:3000/api/v1/todos',{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(updatedTodoFromServer => setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return updatedTodoFromServer
      }
      return todo
    }))
    )
  }

  const deleteHandler = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const someInfo = useMemo(() => expensiveCalculation(), []) 

  return (
    <todosContext.Provider value={{
      todos,
      deleteHandler,
      changeStatusHandler, 
      countOfDone,
      someInfo
    }} >
      <addHandlerContext.Provider value={addHandler}>
        {children}
      </addHandlerContext.Provider>
    </todosContext.Provider>
  )
}

export default TodosContextProvider

const useTodosContext = () => useContext(todosContext)
const useAddHandlerContext = () => useContext(addHandlerContext)

export {
  useTodosContext,
  useAddHandlerContext
}