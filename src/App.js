import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {Icon} from 'antd';
import router from './router';
import {Link} from 'react-router-dom';

function App (props) {
  
    return(
      <div>
         <div className="applogo">
                <Link to='/login' className="links login">Login <Icon type="user"/> </Link> 
                <Link to='/' className="links homelink">Gallery <Icon type="shop"/></Link>
                <Link to='/cart' className="links cart">Cart <Icon type="shopping-cart"/></Link>
                <h1 className="logotitle">***MY COOL LOGO***</h1>
         </div>
         
        {router}
      </div>
    )
  
}

export default App;