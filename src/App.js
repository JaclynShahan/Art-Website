import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/LoginComponents/Login.js'
import { Icon, Badge, Button } from 'antd'
import router from './router'
import { Link } from 'react-router-dom'
import store from './store'
import Search from './components/HomeComponents/Search'
import { connect } from 'react-redux'
import Home from './components/HomeComponents/Home'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    Axios.get(`/api/getCart`).then(resp => {
      console.log('getCart:', resp)
      this.props.setCartList(resp.data)
    })
  }

  logoutUser () {
    Axios.put('/api/logout').then(resp => {
      console.log(resp)
      this.props.setUsername()
      this.props.setPin()
      this.props.setAuthentication(false)
    })
  }

  render () {
    return (
      <div>
        <div className='applogo'>
          {this.props.login.authentication ? (
            <Button onClick={() => this.logoutUser()}>Logout</Button>
          ) : (
            <Link to='/login' className='links login'>
              Login <Icon type='user' />{' '}
            </Link>
          )}

          <Link to='/' className='links homelink'>
            Gallery <Icon type='shop' />
          </Link>

          <Link to='/cart' className='links cart'>
            Cart
            <Icon type='shopping-cart' />
            <Badge
              style={{ height: '18px', width: '1px', marginTop: '10px' }}
              count={this.props.cart.cartItem.length}
              showZero
            />
          </Link>
          <Search />
          <h1 className='logotitle'>***MY COOL LOGO***</h1>
        </div>

        {router}
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setCartList (arr) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: arr
    })
  },
  setAuthentication (val) {
    dispatch({
      type: 'USER_AUTH',
      payload: val
    })
  },
  setUsername () {
    dispatch({
      type: 'SET_USERNAME',
      payload: ''
    })
  },
  setPin () {
    dispatch({
      type: 'SET_PIN',
      payload: ''
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
