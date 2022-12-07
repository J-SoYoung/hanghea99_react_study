
// Action Value
const ADD_NUMBER = "ADD_NUMBER"
const MINOR_NUMBER = "MINOR_NUMBER"


// Action Creator 액션함수
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload
    // = payload: payload
  }
}
export const minorNumber = (payload) => {
  return {
    type: MINOR_NUMBER,
    payload
    // = payload: payload
  }
}

// Initial State
const initialState = {
  number : 0
};


// Reducer
const counter = (state=initialState, action) =>{
  switch (action.type){
    case ADD_NUMBER : {
      return {
        number : state.number + action.payload
      }
    } 
    case MINOR_NUMBER : {
      return {
        number : state.number - action.payload
      }
    } 
    default:
      return state
  }
}

// export default reducer
export default  counter;



