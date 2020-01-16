import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// import * as Sentry from "@sentry/browser";
import { Provider } from "react-redux";

import { ParentalCompensationApp } from "./features";
import { store } from "./store";

/*Sentry.init({
  dsn: process.env.REACT_APP_API_SENTRY
});*/

ReactDOM.render(
  <Provider store={store}>
    <ParentalCompensationApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
