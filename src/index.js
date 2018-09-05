import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import createMemoryHistory from "history/createMemoryHistory";
import { Router } from "react-router";

const history = createMemoryHistory({
  initialEntries: ["/"], // The initial URLs in the history stack
  initialIndex: 0, // The starting index in the history stack
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user. Required
  // if you return string prompts from transition hooks (see below)
  // getUserConfirmation:(message, callback) => callback(window.confirm(message))
  getUserConfirmation: null
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
