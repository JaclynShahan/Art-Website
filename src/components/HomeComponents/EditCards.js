import React, { Component } from 'react'
import { Input, Button, Modal } from 'antd'
import { connect } from 'react-redux'

class EditCards extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { id, imageurl, title, description, size, price } = this.props.edit

    console.log('Props', this.props)
    return (
      <div>
        <span>Edit Title:</span>
        <Input
          className='modalInputs'
          onChange={e => this.props.setEditTitle(e)}
          placeholder={this.props.edit.title}
        />
        <span>Edit Description:</span>
        <Input
          className='modalInputs'
          onChange={e => this.props.setEditDescription(e)}
          value={this.props.edit.description}
        />
        <span>Edit Size:</span>
        <Input
          className='modalInputs'
          onChange={e => this.props.setEditSize(e)}
          value={this.props.edit.size}
        />
        <span>Edit Price:</span>
        <Input
          className='modalInputs'
          onChange={e => this.props.setEditPrice(e)}
          value={this.props.edit.price}
        />
        <span>Edit Image URL:</span>
        <Input
          className='modalInputs'
          onChange={e => this.props.setEditImage(e)}
          value={this.props.edit.imageurl}
        />
         <Button
          className='cancelButton'
          onClick={() => this.props.setEditModal(false)}
          type='primary'
        >
          Cancel
        </Button>
        <Button
          className="saveButton"
          onClick={() =>
            this.props.onSave(id, imageurl, title, description, size, price)
          }
          type='primary'
        >
          Save
        </Button>
       
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setEditId (e) {
    dispatch({
      type: 'EDIT_ID',
      payload: e.target.value
    })
  },
  setEditImage (e) {
    dispatch({
      type: 'EDIT_IMAGE',
      payload: e.target.value
    })
  },
  setEditTitle (e) {
    dispatch({
      type: 'EDIT_TITLE',
      payload: e.target.value
    })
  },
  setEditDescription (e) {
    dispatch({
      type: 'EDIT_DESCRIPTION',
      payload: e.target.value
    })
  },
  setEditSize (e) {
    dispatch({
      type: 'EDIT_SIZE',
      payload: e.target.value
    })
  },
  setEditPrice (e) {
    dispatch({
      type: 'EDIT_PRICE',
      payload: e.target.value
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  },
  setInspectedCard (art) {
      dispatch({
          type: 'SET_EDIT_CARD',
          payload: art
      })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCards)
