import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobots } from "./reducers";

//we gonna create our stare wher we're gonna stock all of action states
const store = createStore(searchRobots);

// ReactDOM.render(<App store={store} />, document.getElementById("root"));
//instead of passing the store as a props all a long
//our components tree, we can just wrap our <App/> inside the provider
//and it will take care of the reste (passing it to all the other component)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
