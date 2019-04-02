import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = { cart: [] };


function rootReducer(state = INITIAL_STATE, action) {
  console.log("IN REDUCER", state, action);

  switch (action.type) {
    case ADD:
      let addItem = [...state.cart, action.payload.id];

      return { cart: addItem };

    case REMOVE:
      let itemIndex = state.cart.indexOf(action.payload.id);

      let removeItem = [
        ...state.cart.slice(0, itemIndex),
        ...state.cart.slice(itemIndex + 1)
      ];
      return { cart: removeItem };

    default:
      return state;
  }
}

export default rootReducer;
