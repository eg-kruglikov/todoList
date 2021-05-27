import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAddHandlerContext, useTodosContext } from "../../contexts/todosContext"
import useInput from "../../customHooks/useInput"
import { checkEmail, checkNick, checkPass } from "../../helpers/validateFuncs"
import { addTodo, addTodoFromServer } from "../../redux/actionCreators/todosAC"

function Form() {
  console.log('Render component Form')

  const dispatch = useDispatch()

  const inputs = [
    useInput({placeholder: 'Type todo here'}),
  ]

  const submitHandler = (e) => {
    e.preventDefault()
    if (inputs.every(input => input.isValid())) {
      const text = inputs[0].getValue()

      fetch('http://localhost:3000/api/v1/todos',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
      })
      .then(response => response.json())
      .then(newTodoFromServer => dispatch(addTodoFromServer(newTodoFromServer)))

      inputs.forEach(input => input.clear())
    } 
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center">
      <div>
        {
          inputs.map((input, i) => (
            <input key={i} {...input.forTag} className={`form-control ${!input.isValid() && 'inputError'} `} aria-describedby="emailHelp" />
          ))
        }
      </div>
      <button type="submit" className="btn btn-primary mx-1">Submit</button>
    </form>
  )
}

export default React.memo(Form)