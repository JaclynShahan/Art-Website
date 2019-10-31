import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Layout, Card, Icon, Button } from 'antd'

class ArtCards extends Component {
  constructor () {
    super()
    this.state = {}
  }

 

  render () {
    const { Header, Footer, Sider, Content } = Layout
    const { Meta } = Card
    console.log("This component's props:", this.props)
    return (
      <div>
        
            <Card
              key={this.props.id}
              className='cardspace'
              hoverable
              style={{ width: 250, height: 380 }}
              title={
                <img src='https://www.keithmillsartist.com/uploads/1/0/7/1/10719910/between-the-rivers_orig.jpg' />
              }
            >
            
            <h3>{this.props.title}</h3>
            <p>Description: {this.props.description}</p>
            <p>Dimensions: {this.props.size}</p>
            <p>Price: {this.props.price}</p>
            <div>
            <Button onClick={() => this.props.onDelete(this.props.id)} className="editbutton"><Icon type="edit"/></Button>
            <Button className="deletebutton"><Icon type="delete"/></Button>
            </div>
              {/* <Meta
                title={this.props.title}
                description={this.props.description}
                description={this.props.size}
                description={this.props.price}
              /> */}
            </Card>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setArtList (arr) {
    dispatch({
      type: 'ART_LIST',
      payload: arr
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtCards)
