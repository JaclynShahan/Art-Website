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
         <Footer className="footer"><h2> Like me on: www.facebook.com/blah   <Icon type="facebook"/></h2> <h2>Follow me at: www.twitter.com/blah  <Icon type="twitter"/></h2></Footer>
         </Layout>
            </div>
        )
    }
}

export default Home;