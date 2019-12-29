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
      count: 0
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
  onCartDelete = i => {
    console.log(i)
    Axios.delete(`/api/deleteFromCart/${i}`).then(resp => {
      console.log('deleted', resp)
      this.props.setCartList(resp.data)
    })
  }

  render () {
    console.log("Cart length: ", this.props.cart.cartItem.length);
    const { Footer } = Layout
    return (
      <div>
        <table className="tableDesign">
          <tbody>
            {this.props.cart.cartItem.map((item, i) => {
              return (
                <tr className='data' key={i}>
                  <td>
                    <img className="cartImg" src={item.imageurl} />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.size}</td>
                 
                  {/* <td>
                    <Button className='quantitybuttons' onClick={this.decline}>
                      <Icon type='minus' />
                    </Button>
                    <span>{1}</span>
                    <Button className='quantitybuttons' onClick={this.increase}>
                      <Icon type='plus' />
                    </Button>
                  </td> */}
                  <td>
                    <span>Total:</span>
                    {item.price}
                  </td>
                  <td className='buttondata'>
                    <Button className='quantitybuttons' onClick={() => this.onCartDelete(item.cartId)}>
                      <Icon type='delete' />
                    </Button>{' '}
                  </td>
                </tr>
              )
            })
          }
            
          </tbody>
          
        </table>
        <Button className="checkout">Checkout</Button>
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
