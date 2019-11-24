import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/LoginComponents/Login.js'
import { Icon, Badge } from 'antd'
import router from './router'
import { Link } from 'react-router-dom'
import store from './store'
import Search from './components/HomeComponents/Search'
import { connect } from 'react-redux'
import Home from './components/HomeComponents/Home'
import Axios from 'axios';

class App extends Component {
constructor(props) {
  super(props)
  this.state = {

  }
}
componentDidMount = () => {
Axios.get(`/api/getCart`).then(resp => {
  console.log("getCart:" , resp)
  this.props.setCartList(resp.data)
})
}
render () {
  return (
    <div>
      <div className='applogo'>
        <Link to='/login' className='links login'>
          Login <Icon type='user' />{' '}
        </Link>
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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setCartList (arr) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: arr
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
