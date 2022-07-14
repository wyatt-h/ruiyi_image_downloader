import React from "react";
import ReactDOM from "react-dom";
import store from "../shared/util/store";
import { Provider } from "react-redux";

import Header from "./Header";
import ImageDashboard from "./ImageDashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ImageDashboard />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
