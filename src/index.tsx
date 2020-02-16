import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ToastProvider } from "react-toast-notifications";

import { appReducer, authReducer, onlineCashbacksReducer } from "./reducers";
import { TAppState, TUserState, TOnlineCashbacksState } from "./types";
import Routing from "./components/Routing";

//JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//CSS FILES
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

//CSS CUSTOM FILES
import "./assets/scss/mdb.scss";
import "./index.css";

export type TGlobalState = {
  appModule: TAppState;
  userModule: TUserState;
  onlineCashbacksModule: TOnlineCashbacksState;
};

const rootReducer = combineReducers({
  appModule: appReducer,
  authModule: authReducer,
  onlineCashbacksModule: onlineCashbacksReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <Routing />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);
