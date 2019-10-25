import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {Layout, Icon} from 'antd';
import router from './router';
import {Link} from 'react-router-dom';

function App (props) {
  const { Header, Footer, Sider, Content } = Layout;
  
    return(
      <div>
       <Layout>
         <Header className="applogo">
          <h1 className="logotitle">***MY COOL LOGO***</h1>
         </Header>
         <Header className="navbar">
                <Link to='/login' className="links login">Login <Icon type="user"/> </Link> 
                <Link to='/' className="links homelink">Gallery <Icon type="shop"/></Link>
                <Link to='/cart' className="links cart">Cart <Icon type="shopping-cart"/></Link>
         </Header>
         
         <Content className="contents">Content</Content>
         <Footer className="footer"><h2> Like me on: www.facebook.com/blah   <Icon type="facebook"/></h2> <h2>Follow me at: www.twitter.com/blah  <Icon type="twitter"/></h2></Footer>
       </Layout>
        {router}
      </div>
    )
  
}

export default App;