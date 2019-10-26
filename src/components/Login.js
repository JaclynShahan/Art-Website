import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import router from './router';
import {Form, Icon, Input, Button, Checkbox, Avatar} from 'antd';
import './Login.css';

class Login extends Component {
    super() {
        this.state= {

        }
    }

    render() {
        
        return(
            <div>
                <form className="form-content">
                
                <div className="imgcontainer">
                
                    <Avatar size={74} icon="user"/>
                </div>
                <div className="container">
                    <label>Username:</label>
                    <Input 
                    type="text"
                    placeholder="Enter Username..."
                    />
                    <label>Password:</label>
                    <Input 
                    type="password"
                    placeholder="Enter Password..."
                    />
                    <div className="container">
                    <br></br>
                    <Button type="submit">Login</Button>
                    <span className="signup">OR</span>
                    <span className="signup"><a href="a">Create Account</a></span>
                    <br></br>
                    <br></br>
                    <Input type="checkbox"/>
                    <span className="spacing">
                    Remember Me
                    </span>
                        
                   
                    </div>
                </div>
                <div className="container">
                <Button>Cancel</Button>
                <span className="psw">Forgot <a href="#">Password?</a></span>
                
                </div>
                    

                </form>
            </div>
        )
    }
}

export default Login;