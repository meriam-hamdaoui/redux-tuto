import {
  CAHNGE_SEARCH_FIELAD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

//we need to initialate our state
const initialStateSearch = {
  searchField: "",
};

//this is our first reducer
export const searchRobots = (state = initialStateSearch, action = {}) => {
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

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: ture };
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    //{ ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload };
  }
};
