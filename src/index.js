import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductReducer from "./reducers/productReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import New from "./New";
import Register from "./components/Register";
import Login from "./components/Login";

const store = createStore(ProductReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register" exact={true} component={Register} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/app" exact={true} component={App} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
