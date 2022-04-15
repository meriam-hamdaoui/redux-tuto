import { CAHNGE_SEARCH_FIELAD } from "./constants";

//we need to initialate our state
const initialState = {
  searchField: "",
};

//this is our first reducer
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAHNGE_SEARCH_FIELAD:
      //return a new state
      //   return Object.assign({}, state, { searchField: action.payload });
      //   or we can destructur our Object
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
