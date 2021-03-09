require("./bootstrap");
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Eshop from "./Main";
import "../css/app.css";

if (document.getElementById("root")) {
    ReactDOM.render(<Eshop />, document.getElementById("root"));
}