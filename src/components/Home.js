import React, {Component} from 'react';
//import router from './router';
//import {Link} from 'react-router-dom';
import './Home.css';
import {Layout, Icon, Card} from 'antd';

class Home extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        const { Header, Footer, Sider, Content } = Layout;
        const {Meta} = Card;
   
        return(
            <div>
                <Layout>
         <Content className="contents contentbox">
        
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://www.keithmillsartist.com/uploads/1/0/7/1/10719910/between-the-rivers_orig.jpg"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/v1527201847/Flow_ollnzm.jpg"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://osnatfineart.com/paintings/images/9195-modern-abstract-painting.jpg"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://images.discerningassets.com/image/upload/q_auto/c_fit,h_600,w_600/v1511277258/Heartbeat_kogd7d.jpg"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://images.squarespace-cdn.com/content/v1/58a3190c29687f972b358c29/1566574364636-7UQFDS7H8CB1RSOZ2W8A/ke17ZwdGBToddI8pDm48kMgXDiUt1GJcldMuoAn6DuFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzexwoeEJz7tduL9C3t2MgwEf-pP187ioSHmH21rtWmeNPAmYT9wPT1hcTHd4l0Dn4/inexplicably500.jpg"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>
         <Card
         className="cardspace"
         hoverable
         style={{width: 140}}
         cover={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqCYVjwYaFLKBT6cuZcFiKR4WxWRjfRPeEJXl40zEPcirRbZO&s"/>}
         >
            <Meta title="My Awesome Painting" description="$25.00"/>
         </Card>

        
         </Content>
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