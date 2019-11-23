import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import router from './router'
import { Layout, Avatar, Icon, Button } from 'antd'
import Axios from 'axios'
import { connect } from 'react-redux'
import Contact from '../Contact'
import './Cart.css'

class Cart extends Component {
  constructor () {
    super()
    this.state = {
      count: 0,
      
    }
  }
  increase = () => {
    const count = this.state.count + 1
    this.setState({ count })
  }

  decline = () => {
    let count = this.state.count - 1
    if (count < 0) {
      count = 0
    }
    this.setState({ count })
  }
 



  render () {
    const { Footer } = Layout
    return (
      <div>
        <table className='tableDesign'>
          <tbody>
            <tr className='data'>
              <td>
                <Avatar size={80}>{this.props.cart.imageUrl}</Avatar>
              </td>
              <td>{this.props.cart.description}</td>
              <td>{this.props.cart.size}</td>
              <td>{this.props.cart.price}</td>
              <td>
                <Button className='quantitybuttons' onClick={this.decline}>
                  <Icon type='minus' />
                </Button>
                <span>{this.state.count}</span>
                <Button className='quantitybuttons' onClick={this.increase}>
                  <Icon type='plus' />
                </Button>
              </td>
              <td>
                <span>Total:</span>
              </td>
              <td className='buttondata'>
                <Button className='quantitybuttons'>
                  <Icon type='delete' />
                </Button>{' '}
              </td>
            </tr>
          </tbody>
        </table>
        <Footer className='footerpage footFloat'>
          <div className='email'>
            <Contact />
          </div>
          <h2>
            Like me: <a>www.facebook.com/blah</a>
            <Icon className='icons' type='facebook' />/ Follow me:
            <a>www.twitter.com/blah</a>{' '}
            <Icon className='icons' type='twitter' />/ Add me:{' '}
            <a>@randomscreenname</a> <Icon type='instagram' />
          </h2>
        </Footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setCartList (arr) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: arr
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
