import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import createMemoryHistory from "history/createMemoryHistory";
import { Router } from "react-router";
import * as store from "./store";

const history = createMemoryHistory({
  initialEntries: ["/"], // The initial URLs in the history stack
  initialIndex: 0, // The starting index in the history stack
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user. Required
  // if you return string prompts from transition hooks (see below)
  // getUserConfirmation:(message, callback) => callback(window.confirm(message))
  getUserConfirmation: null
});

const { Provider, Consumer } = React.createContext(store);
export {Consumer}
ReactDOM.render(
  <Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
