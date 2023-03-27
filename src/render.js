import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addMessage } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let render = (state) => {
  root.render(<App state={state} addMessage={addMessage} />);
};
