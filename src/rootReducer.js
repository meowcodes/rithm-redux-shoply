const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("IN REDUCER", state, action);

  switch (action.type) {
    case "ADD":
      return state;

    case "DELETE":
      return state;

    default:
      return state;
  }
}

export default rootReducer;