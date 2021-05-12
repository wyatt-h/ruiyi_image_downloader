import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
