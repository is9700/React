import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login/Login';
import Register from "./register/Register";
import Home from './home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from "./errors/Error";

ReactDOM.render(
  <Router>
    <Switch>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/">
        <Error />
      </Route>

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
