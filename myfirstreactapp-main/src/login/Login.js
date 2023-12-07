import React, { Component } from 'react';
import "./Login.css";
import image from  "./img_avatar2.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Login extends Component {
    render() {
        return (
            
            <div>
                <h2>Login Form</h2>
                <form action="/action_page.php" method="post">
                    <div class="imgcontainer">
                        <img src={image} alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container" style={{"background-color":"#f1f1f1"}}>
                        <Link to="/register">Register</Link>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;

