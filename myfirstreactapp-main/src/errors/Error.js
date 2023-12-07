import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Error extends Component {
    render() {
        return (
            <div>
                <p> Error 404</p>
            </div>
        );
    }
}

export default Error;