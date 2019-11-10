import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import router from './router'
import {List, Avatar, Icon, Button} from 'antd';


class Cart extends Component {
    constructor() {
        super()
        this.state = {
          count: 0,

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
  

    render() {
      
        return(
          <table className="tableDesign">
            <tbody >
              <tr className="data">
                <td><Avatar></Avatar></td>
                <td>Art Description</td>
                <td>Art size</td>
                <td>Art Price</td>
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

export default Cart;