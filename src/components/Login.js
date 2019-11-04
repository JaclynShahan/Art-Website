import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import router from './router';
import { Form, Icon, Input, Button, Checkbox, Avatar, Upload, message } from 'antd'
import './Login.css'
import {connect} from 'react-redux';
import Axios from 'axios';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  authRequest = () => {
    Axios.post(`/api/verifyUser`, {
      username: this.props.login.username,
      password: this.props.login.password
    }).then(resp => {
      console.log(resp.data)
      this.props.setAuthentication(resp.data)
    })
  }
  
  render () {
  console.log(this.props.login)
    return (
      <div>
          
          <form className='form-content'>
          <div className='imgcontainer'>
            <Avatar size={80} src={this.props.newArt.imageUrl} />
          </div>
        
          <div className='container'>
            <label>Username:</label>
            <Input
             type='text' 
             placeholder='Enter Username...' 
            onChange={e => this.props.setUsername(e)}
            />
            <label>Password:</label>
            <Input
             type='password' 
             placeholder='Enter Password...' 
             onChange={e => this.props.setPassword(e)}
             />
            <div className='container'>
              <br />
              <Button onClick={this.authRequest} type='submit'>Login</Button>
              <span className='signup'>OR</span>
              <span className='signup'>
                <a href='a'>Create Account</a>
              </span>
              <br />
              <br />
              <Input type='checkbox' />
              <span className='spacing'>Remember Me</span>
            </div>
          </div>
          <div className='container'>
            <Button>Cancel</Button>
            <span className='psw'>
              Forgot <a href='#'>Password?</a>
            </span>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("state:", state)
  return state
}
const mapDispatchToProps = dispatch => ({
  imageHandler (e) {
    dispatch({
      type: "NEW_IMAGE",
      payload: e.target.value
    })
  },
  setUsername (e) {
    dispatch({
      type: "SET_USERNAME",
      payload: e.target.value
    })
  },
  setPassword (e) {
    dispatch({
      type: "SET_PASSWORD",
      payload: e.target.value
    })
  },
  setAuthentication(val) {
    dispatch({
      type: "USER_AUTH",
      payload: val
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
