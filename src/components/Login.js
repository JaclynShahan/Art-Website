import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import router from './router';
import { Form, Icon, Input, Button, Checkbox, Avatar, Upload, message } from 'antd'
import './Login.css'
import {connect} from 'react-redux';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  
  render () {
  
    return (
      <div>
          
          <form className='form-content'>
          <div className='imgcontainer'>
            <Avatar size={80} src={this.props.newArt.imageUrl} />
          </div>
        
          <div className='container'>
            <label>Username:</label>
            <Input type='text' placeholder='Enter Username...' />
            <label>Password:</label>
            <Input type='password' placeholder='Enter Password...' />
            <div className='container'>
              <br />
              <Button type='submit'>Login</Button>
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
      type: 'NEW_IMAGE',
      payload: e.target.value
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
