import React, {Component} from 'React';
import {Link} from 'react-router-dom';
import router from './router';

class Login extends Component {
    super() {
        this.state= {

        }
    }

    render() {
        return(
            <div>
                <div>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                </div>
                {router}

            </div>
        )
    }
}

export default Login;