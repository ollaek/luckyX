import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ToastProvider } from "react-toast-notifications";

import {
  appReducer,
  authReducer,
  onlineCashbacksReducer,
  inStoreOffersReducer,
  accountReducer,
  cashoutReducer,
  walletReducer,
  configReducer,
  contactUsReducer
} from "./reducers";
import {
  TAppState,
  TUserState,
  TOnlineCashbacksState,
  TInStoreOffersState,
  TAccountState,
  TCashoutState,
  TWalletState,
  TConfigState,
  TContactUsState
} from "./types";
import Routing from "./components/Routing";

//JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//CSS FILES
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

//CSS CUSTOM FILES
import "./assets/scss/mdb.scss";
// import "./index.css";

export type TGlobalState = {
  configModule: TConfigState;
  appModule: TAppState;
  authModule: TUserState;
  onlineCashbacksModule: TOnlineCashbacksState;
  inStoreOffersModule: TInStoreOffersState;
  accountModule: TAccountState;
  cashoutModule: TCashoutState;
  walletModule: TWalletState;
  contactUsModule: TContactUsState;
};

const rootReducer = combineReducers({
  configModule: configReducer,
  appModule: appReducer,
  authModule: authReducer,
  onlineCashbacksModule: onlineCashbacksReducer,
  inStoreOffersModule: inStoreOffersReducer,
  accountModule: accountReducer,
  cashoutModule: cashoutReducer,
  walletModule: walletReducer,
  contactUsModule: contactUsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <Routing />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);
