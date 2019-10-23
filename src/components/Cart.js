import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import router from './router'


class Cart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                </div>
                {router}
            </div>
        )
    }
}

export default Cart;