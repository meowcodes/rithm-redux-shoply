import { ADD, REMOVE } from "./actionTypes";
import { add, remove } from "./actions";

describe("action creator add", function () {
  it("return expected action", function () {
    let action = add(2);
    expect(action).toEqual({
      type: ADD,
      payload: { id: 2 }
    });
  });
});


describe("action creator remove", function () {
  it("return expected action", function () {
    let action = remove(2);
    expect(action).toEqual({
      type: REMOVE,
      payload: { id: 2 }
    });
  });
});
