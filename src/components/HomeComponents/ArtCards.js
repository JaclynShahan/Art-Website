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
    // message.error('Click on No')
  }

  openEditModal = () => {
    const { art } = this.props
    this.props.setInspectedCard(art)
    this.props.setEditModal(true)
  }
  onEditCard = (id, img, ttl, desc, sz, prc) => {
    Axios.put(`/api/updateCard`, {
      id: id,
      imageurl: img,
      title: ttl,
      description: desc,
      size: sz,
      price: prc
    }).then(resp => {
      console.log('updated:', resp)
      this.props.setEditModal(false)
      this.props.setArtList(resp.data)
      //this.props.clearEdit()
    })
  }

  render () {
    const { imageurl } = this.state
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
          title={<img className="cardimg"src={this.props.imageurl} />}
        >
          <h3>{this.props.title}</h3>
          <p>Description: {this.props.description}</p>
          <p>Dimensions: {this.props.size}</p>
          <p>Price: {this.props.price}</p>
          <div className='buttonPadding'>
            <Button
              onClick={() =>
                this.props.addCart(this.props.id, this.props.art)
              }
            >
              <Icon type='shopping' />
              Add to Cart
            </Button>
            {this.props.login.authentication ? (
            <Button onClick={() => this.openEditModal()} className='editbutton'>
              <Icon type='edit' />
            </Button>
            ) : ("")
            }
            <Modal
              okText=''
              title='Edit Card' // change to title of chosen art
              onCancel={() => this.props.setEditModal(false)}
              visible={this.props.newArt.editModal}
              footer={[]}
            >
              <EditCards onSave={this.onEditCard} />
            </Modal>
            {this.props.login.authentication ? (
            <Popconfirm
              title='Are you sure you want to delete?'
              onConfirm={() => this.props.onDelete(this.props.id)}
              onCancel={e => this.cancel(e)}
              okText='Yes'
              cancelText='No'
            >
              <Button
                // onClick={() => this.props.onDelete(this.props.id)}
                className='deletebutton'
              >
                <Icon type='delete' />
              </Button>
            </Popconfirm>
            ) : ("")}
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

  setInspectedCard (art) {
    dispatch({
      type: 'SET_EDIT_CARD',
      payload: art
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  },
  clearEdit () {
    dispatch({
      type: 'CLEAR_EDIT',
      payload: ""
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtCards)
