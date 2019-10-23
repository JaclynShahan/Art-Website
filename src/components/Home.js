import React, {Component} from 'react';
import router from './router';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        return(
            <div>
                 <div>
                <Link to='/login'>Login</Link>
                <Link to='/cart'>Cart</Link>
                </div>
                {router}
            </div>
        )
    }
}

export default Home;