//this file will contain all the redux actions
import { CAHNGE_SEARCH_FIELAD } from "./constants";

export const setSearchField = (text) => ({
  type: CAHNGE_SEARCH_FIELAD,
  //comman name in redux, recieve whatever the user enter
  payload: text,
});
