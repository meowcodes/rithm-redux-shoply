import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = { cart: {} };


function rootReducer(state = INITIAL_STATE, action) {
  console.log("IN REDUCER", state, action);
  const currId = action.payload ? action.payload.id + "" : null;

  switch (action.type) {
    case ADD:
      let currCount = 0;
      
      if(state.cart[currId]){
        currCount = state.cart[currId]
      }

      return { cart: {...state.cart, [currId]: currCount + 1 }}
    case REMOVE:
      if(state.cart[currId] > 1){
        let currCount = state.cart[currId]
        return { cart: {...state.cart, [currId]: currCount - 1 }}
      }else {
        let currCart = state.cart;
        delete currCart[currId];
        return { cart: currCart};
      }
    default:
      return state;
  }
}

export default rootReducer;
