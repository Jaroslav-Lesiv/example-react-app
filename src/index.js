import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import createBrowserHistory from "history/createBrowserHistory";
import { Router } from "react-router";

const history = createBrowserHistory({
  basename: '',             // The base URL of the app (see below)
  forceRefresh: false,      // Set true to force full page refreshes
  keyLength: 6,             // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById("root")
);
registerServiceWorker();
