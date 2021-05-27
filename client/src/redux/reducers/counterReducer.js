import { INC } from "../types/counterTypes";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INC:
      return state = state + 1
  
    default:
      return state
  }
}


export default counterReducer