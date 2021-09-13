import React from "react";
import ReactDOM from "react-dom";
// import store from "./store";
import { Provider } from "react-redux";
import "./style/style.css";

import Header from "./components/Header";

import Guest from "./screens/Guest";

const App = () => {
  return (
    // <Provider store={store}>
    <>
      <Header />
      <Guest />
      {/* <ImageDashboard /> */}
    </>
    // </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
