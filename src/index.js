import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "./views/Main.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Main" render={(props) => <Main {...props} />} />
      
      <Redirect to="/Main" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
