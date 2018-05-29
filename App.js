import React from "react";
import { createStore,  combineReducers } from "redux";
import { Provider } from "react-redux";
import users from "./src/reducers/user.reducer";
import Home from "./src/main.js";
const allReducers = combineReducers({
  users
});

const store = createStore(allReducers);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
