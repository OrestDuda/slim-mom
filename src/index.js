import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
//import { Provider } from 'react-redux';
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
