import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Layout, Card, Icon, Button, Modal, message, Popconfirm } from 'antd'
import EditCards from './EditCards';

class ArtCards extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }

// confirm = (e) => {
//   console.log(e)
//   message.error('Click on No')
// }

// cancel = (e) => {
//   console.log(e)
//   message.error('Click on No')
// }

openEditModal = () => {
  const {card} = this.props
  this.props.setInspectedCard(card)
  this.props.setEditModal(true)
}
onEditCard = (id, img, ttl, desc, sz, prc) => {
  Axios.put(`/api/updateCard`, {
    id: id,
    image: img,
    title: ttl,
    description: desc,
    size: sz,
    price: prc
  }).then(resp => {
    console.log(resp)
    this.props.setEditModal(false)
    this.props.setArtList(resp.data)
  })
}
  render () {
    
    const { imageUrl } = this.state;
    const { Header, Footer, Sider, Content } = Layout
    const { Meta } = Card
    console.log("This component's props:", this.props)
    return (
      <div>
        
            <Card
              key={this.props.id}
              className='cardspace'
              hoverable
              style={{ width: 300, height: 380 }}
              title={
                <img src={this.props.imageUrl} />
              }
            >
            
            <h3>{this.props.title}</h3>
            <p>Description: {this.props.description}</p>
            <p>Dimensions: {this.props.size}</p>
            <p>Price: {this.props.price}</p>
            <div className="buttonPadding">
            <Button><Icon type="shopping"/>Add to Cart</Button>
            <Button 
            onClick={() => this.openEditModal()}
            className="editbutton"><Icon type="edit"/>
            </Button>
            <Modal
            okText=''
            title="Edit Card"
           // onCancel={this.props.setEditModal(false)}
            visible={this.props.newArt.editModal}
            footer={[]}
            >
              <EditCards 
              onSave={this.onEditCard}
              />
            </Modal>
            {/* <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={(e) => this.confirm(e)}
            onCancel={(e) => this.cancel(e)}
            okText="Yes"
            cancelText="No"
            > */}
            <Button onClick={() => this.props.onDelete(this.props.id)} className="deletebutton"><Icon type="delete"/></Button>
            {/* </Popconfirm> */}
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
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  },
  setInspectedCard (card) {
    dispatch({
      type: 'SET_EDIT_CARD',
      payload: card
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtCards)
