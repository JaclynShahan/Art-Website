import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/LoginComponents/Login.js';
import {Icon, Badge} from 'antd';
import router from './router';
import {Link} from 'react-router-dom';
import store from './store';
import Search from './components/HomeComponents/Search';

function App (props) {
  
    return(
      <div>
         <div className="applogo">
           
          
        
                <Link to='/login' className="links login">Login <Icon type="user"/> </Link> 
                <Link to='/' className="links homelink">Gallery <Icon type="shop"/></Link> 
               
                <Link to='/cart' className="links cart">

                Cart
                <Icon type="shopping-cart"/>
                <Badge style={{ height: "18px" , width: "1px", marginTop: "10px"}} count={0} showZero>
              
                </Badge>
              
                
                </Link>
                <Search />
                <h1 className="logotitle">***MY COOL LOGO***</h1>
                
                
         </div>
         
        {router}
      </div>
    )
  
}

export default App;