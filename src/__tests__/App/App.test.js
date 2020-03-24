import React from "react";
import { shallow, mount } from "enzyme";
import App from "../../components/App/App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import {
  appReducer,
  authReducer,
  onlineCashbacksReducer,
  inStoreOffersReducer
} from "../../reducers";

const rootReducer = combineReducers({
  appModule: appReducer,
  authModule: authReducer,
  onlineCashbacksModule: onlineCashbacksReducer,
  inStoreOffersModule: inStoreOffersReducer
});

const store = createStore(rootReducer);

describe("Home Page Component", () => {
  it("Render App Component", () => {
    const wraper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wraper).toMatchSnapshot();
  });
//   it("Render App Component with children", () => {
//     const x = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     expect(x).toMatchSnapshot();
//   });
});
