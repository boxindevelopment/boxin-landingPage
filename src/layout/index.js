import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "antd/dist/antd.css";
import "../../public/assets/css/custom.scss";
import Favicon from "react-favicon";

ReactDOM.render(
  <div>
    <Favicon url="../../src/assets/img/favicon.ico" />
    <Routes />
  </div>,
  document.getElementById("root")
);
