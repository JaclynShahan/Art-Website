import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Layout, Card, Icon, Button, Modal, message, Popconfirm } from 'antd'
import EditCards from './EditCards'

class ArtCards extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  confirm = e => {
    console.log(e)
    message.error('Click on No')
  }

  cancel = e => {
    console.log(e)
    message.error('Click on No')
  }

  openEditModal = () => {
    const { card } = this.props
    this.props.setInspectedCard(card)
    this.props.setEditModal(true)
  }

  render () {
    const { imageUrl } = this.state
    const { Header, Footer, Sider, Content } = Layout
    const { Meta } = Card
    console.log('Art Card props:', this.props)
    return (
      <div>
        <Card
          key={this.props.id}
          className='cardspace'
          hoverable
          style={{ width: 300, height: 380 }}
          title={<img src={this.props.imageUrl} />}
        >
          <h3>{this.props.title}</h3>
          <p>Description: {this.props.description}</p>
          <p>Dimensions: {this.props.size}</p>
          <p>Price: {this.props.price}</p>
          <div className='buttonPadding'>
            <Button
              onClick={() =>
                this.props.addCart(this.props.id, this.props.cart.cartItem)
              }
            >
              <Icon type='shopping' />
              Add to Cart
            </Button>
            <Button onClick={() => this.openEditModal()} className='editbutton'>
              <Icon type='edit' />
            </Button>
            <Modal
              okText=''
              title="Edit Card" //change to title of chosen art
              onCancel={() => this.props.setEditModal(false)}
              visible={this.props.newArt.editModal}
              footer={[]}
            >
              <EditCards onSave={this.props.onEditCard} />
            </Modal>
            <Popconfirm
              title='Are you sure you want to delete?'
              onConfirm={e => this.confirm(e)}
              onCancel={e => this.cancel(e)}
              okText='Yes'
              cancelText='No'
            >
              <Button
                onClick={() => this.props.onDelete(this.props.id)}
                className='deletebutton'
              >
                <Icon type='delete' />
              </Button>
            </Popconfirm>
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

  setInspectedCard (card) {
    dispatch({
      type: 'SET_EDIT_CARD',
      payload: card
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtCards)
