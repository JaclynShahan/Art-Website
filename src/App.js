import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {Layout} from 'antd';
import router from './router';
import {Link} from 'react-router-dom';

function App (props) {
  const { Header, Footer, Sider, Content } = Layout;
  
    return(
      <div>
       <Layout>
         <Header className="navbar">
                <Link to='/' className="links">Home</Link>
                <Link to='/login' className="links">Login</Link> 
                <Link to='/cart' className="links">Cart</Link>
         </Header>
         
         <Content className="contents">Content</Content>
         <Footer>Like me on www.facebook.com/blah</Footer>
       </Layout>
        {router}
      </div>
    )
  
}

export default App;