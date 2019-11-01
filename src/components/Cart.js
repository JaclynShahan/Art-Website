import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import router from './router'
import {List, Avatar, Icon, Button} from 'antd';


class Cart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
  

    render() {
        const data = [
            {
                title: "title"
              }
        ]
        return(
            <List
            style={{
                textAlign: 'left',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
              }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
        
                <List.Item.Meta
                
                  avatar={<Avatar size={80} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <Button
                style={{marginRight: '10px'}}
                >
                <Icon 
                
                type="delete" />
                </Button>
              </List.Item>
            )}
    
          />
        )    
}
}

export default Cart;