import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import "./style/style.css";

import Header from "./components/Header";
import ImageDashboard from "./components/ImageDashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ImageDashboard />
    </Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
