import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import router from './router'
import {List, Avatar, Icon, Button} from 'antd';
import Axios from 'axios';
import {connect} from 'react-redux'


class Cart extends Component {
    constructor() {
        super()
        this.state = {
          count: 0,
          cartArray: []

        }
    }
    increase = () => {
      const count = this.state.count + 1;
      this.setState({count})
    }

    decline = () => {
      let count = this.state.count - 1;
      if (count < 0) {
        count = 0
      }
      this.setState({count})
    }
    updateCartArray(cartArray) {
      this.setState({cartArray})
    }
  
    //use sessions for this with node since only one user
    addCart = (id, items) => {
      const cartList = items
      cartList.push(this.props.newArt.id)
      Axios.post(`/api/cartList/${id}`, {
        cartArr: cartList
      }).then(resp => {
        console.log(resp)
        this.props.setCartList(resp.data)
      }) 
      this.updateCartArray()
    }

    render() {
      
        return(
          <table className="tableDesign">
            <tbody >
              <tr className="data">
                <td><Avatar>{this.props.cart.cartItem.imageUrl}</Avatar></td>
                <td>{this.props.cart.cartItem.description}</td>
                <td>{this.props.cart.cartItem.size}</td>
                <td>{this.props.cart.cartItem.price}</td>
                <td><Button className="quantitybuttons" onClick={this.decline}><Icon type="minus" /></Button>
                <span>{this.state.count}</span>
                <Button className="quantitybuttons" onClick={this.increase}><Icon type="plus" /></Button>
                </td>
                <td>
                  <th>Total:</th>

                </td>
                <td className="buttondata"><Button className="quantitybuttons"><Icon type="delete" /></Button> </td>
              </tr>
            </tbody>
          </table>
        )    
}
}

const mapStateToProps = state => {
  console.log("state", state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setCartList(arr) {
    dispatch({
      type: "CART_ITEM",
      payload: arr
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps) (Cart);