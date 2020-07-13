import { SET_DRAWER } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };

    default:
      return state;
  }
};
