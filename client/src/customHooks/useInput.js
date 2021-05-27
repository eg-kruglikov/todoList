import { useState } from "react"

function useInput({initValue = '', placeholder = '', type = 'text', validateFunc}) {
  const [value, setValue] = useState(initValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const clearHanlder = () => {
    setValue('')
  }

  const getValue = () => {
    return value
  }

  const validate = () => {
    return typeof validateFunc === 'function' ? validateFunc(value) : true
  }


  return {
    forTag: {
      placeholder,
      onChange,
      value,
      type
    },
    clear: clearHanlder,
    isValid: validate,
    getValue
  }
}


export default useInput