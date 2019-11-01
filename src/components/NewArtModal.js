import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Modal, Input } from 'antd'
import { connect } from 'react-redux'

class NewArtModal extends Component {
  constructor () {
    super()
    this.state = {}
  }
  onSave = (e) => {
    Axios.post(`/api/createArt`, {
      image: this.props.imageUrl,
      title: this.props.newArt.title,
      description: this.props.newArt.description,
      size: this.props.newArt.size,
      price: this.props.newArt.price
    }).then(resp => {
        e.preventDefault()
        this.props.showModalHandler(false)
      this.props.setArtList(resp.data)
      console.log('Response:', resp)
    })
  }
  render () {
    console.log(this.props.newArt.setShowModal)
    return (
      <div>
        <Button onClick={() => this.props.showModalHandler(true)}>
          Add New
        </Button>
        <Modal
          onOk={this.onSave}
          okText='Save'
          title='Add New Art'
          onCancel={() => this.props.showModalHandler(false)}
          visible={this.props.newArt.setShowModal}
        >
        <Input 
        onChange={e => this.props.imageHandler(e)}
        placeholder='Image'
        value={this.props.newArt.imageUrl}
        />
          <Input
            onChange={e => this.props.titleHandler(e)}
            placeholder='Title'
            value={this.props.newArt.title}
          />
          <Input
            onChange={e => this.props.descriptionHandler(e)}
            placeholder='Description'
            value={this.props.newArt.description}
          />
          <Input
            onChange={e => this.props.sizeHandler(e)}
            placeholder='Size'
            value={this.props.newArt.size}
          />
          <Input
            onChange={e => this.props.priceHandler(e)}
            placeholder='Price'
            value={this.props.newArt.price}
          />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  showModalHandler (val) {
    dispatch({
      type: 'SHOW_NEW_MODAL',
      payload: val
    })
  },
  titleHandler (e) {
    dispatch({
      type: 'NEW_TITLE',
      payload: e.target.value
    })
  },
  descriptionHandler (e) {
    dispatch({
      type: 'NEW_DESCRIPTION',
      payload: e.target.value
    })
  },
  sizeHandler (e) {
    dispatch({
      type: 'NEW_SIZE',
      payload: e.target.value
    })
  },
  priceHandler (e) {
    dispatch({
      type: 'NEW_PRICE',
      payload: e.target.value
    })
  },
  setArtList (arr) {
    dispatch({
      type: 'ART_LIST',
      payload: arr
    })
  },
  imageHandler (e) {
    dispatch({
      type: 'NEW_IMAGE',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArtModal)
