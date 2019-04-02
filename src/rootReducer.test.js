import deepFreeze from 'deep-freeze';
import { ADD, REMOVE } from './actionTypes';
import rootReducer from './rootReducer';


describe('reducer', function() {
  it("returns current state if no action type matches", function() {
    const initialState = { cart: { 2:2, 3:4 } }
    deepFreeze(initialState);

    const action = {
      type: null
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it("adds a new item to state", function() {
    const initialState = { cart: {} }
    deepFreeze(initialState);

    const action = {
      type: ADD,
      payload: { id: 2 }
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual({
      cart: { 2:1 }
    });
  });
  
  it("increments count when existing item added", function() {
    const initialState = { cart: { 2:2 } }
    deepFreeze(initialState);

    const action = {
      type: ADD,
      payload: { id: 2 }
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual({
      cart: { 2:3 }
    });
  });
  
  it("decrements count when existing item removed", function() {
    const initialState = { cart: { 2:2 } }
    deepFreeze(initialState);

    const action = {
      type: REMOVE,
      payload: { id: 2 }
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual({
      cart: { 2:1 }
    });
  });

  it("deletes item if none left in cart", function() {
    const initialState = { cart: { 2:1 } }
    deepFreeze(initialState);

    const action = {
      type: REMOVE,
      payload: { id: 2 }
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual({
      cart: {}
    });
  });

  it("does not change if non-existing item removed", function() {
    const initialState = { cart: {} }
    deepFreeze(initialState);

    const action = {
      type: REMOVE,
      payload: { id: 1 }
    }
  
    let state = rootReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
})