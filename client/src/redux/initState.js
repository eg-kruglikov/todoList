const initState = () => {
  const state  = {
    todos: [],
    counter: 0
  }
  
  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
}




export default initState