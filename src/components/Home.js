import React, {Component} from 'react';
//import router from './router';
//import {Link} from 'react-router-dom';
import './Home.css';
import {Layout, Icon} from 'antd';

class Home extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        const { Header, Footer, Sider, Content } = Layout;
   
        return(
            <div>
                <Layout>
         <Content className="contents">Content</Content>
         <Footer className="footerpage">
         <h2> Like me: www.facebook.com/blah   <Icon className="icons"type="facebook"/>/
          Follow me: www.twitter.com/blah  <Icon className="icons" type="twitter"/>/
          Add me: @randomscreenname <Icon type="instagram"/></h2>
          </Footer>
         </Layout>
            </div>
        )
    }
}

export default Home;