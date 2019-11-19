import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import router from './router';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Avatar,
  Upload,
  message
} from 'antd'
import './Login.css'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      user: {}
    }
  }

  // getUser() {
  //   Axios
  //     .get("/api/loginUser")
  //     .then(resp => this.setState({user: resp.data}))
  // }

  logoutUser () {
    Axios.put('/api/logoutUser').then(resp => {
      console.log(resp)
    })
  }

  authRequest = () => {
    Axios.post(`/api/verifyUser`, {
      username: this.props.login.username,
      pin: this.props.login.pin
    }).then(resp => {
      console.log(resp.data)
      this.props.setAuthentication(resp.data)
      // this.setState({user: resp.data})
    })
  }

  render () {
    console.log(this.props.login)
    return (
      <div>
        <form className='form-content'>
          <div className='imgcontainer'>
            <Avatar size={120} src={this.props.login.userImage} />
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
              onChange={e => this.props.setPin(e)}
            />
            <div className='container'>
              <br />
              <Button onClick={() => this.authRequest()} type='submit'>
                Login
              </Button>
              {/* {this.state.user.username && this.state.user.pin ? <h2>Logged in...</h2> : null} */}
              {this.props.login.user.username && this.props.login.user.pin ? (
                <Redirect to='/' />
              ) : (
                ''
              )}
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
            <Button onClick={() => this.logoutUser()} className='buttons'>
              {' '}
              Logout{' '}
            </Button>
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
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  imageHandler (e) {
    dispatch({
      type: 'NEW_IMAGE',
      payload: e.target.value
    })
  },
  setUsername (e) {
    dispatch({
      type: 'SET_USERNAME',
      payload: e.target.value
    })
  },
  setPin (e) {
    dispatch({
      type: 'SET_PIN',
      payload: e.target.value
    })
  },
  setAuthentication (val) {
    dispatch({
      type: 'USER_AUTH',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
