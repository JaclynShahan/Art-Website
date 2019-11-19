import React, { Component } from 'react'
import { Modal, Input, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import Axios from 'axios'

class Contact extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onSend = e => {
    Axios.post(`/api/sendMessage`, {
      name: this.props.contact.name,
      email: this.props.contact.email,
      message: this.props.contact.message
    }).then(resp => {
      e.preventDefault()
      this.props.contactModalHandler(false)
      this.props.clearFields()
      console.log(resp)
    })
  }

  render () {
    const { TextArea } = Input
    return (
      <div>
        <span className='contactSpan'>Leave any feedback/comments: </span>
        <Icon
          onClick={() => this.props.contactModalHandler(true)}
          style={{ fontSize: '25px', color: 'whitesmoke' }}
          type='mail'
        />
        <Modal
          onOk={this.onSend}
          okText='Send'
          title='Leave me a comment/feedback'
          onCancel={() => this.props.contactModalHandler(false)}
          visible={this.props.contact.showContactModal}
        >
          <Input
            onChange={e => this.props.contactName(e)}
            value={this.props.contact.name}
            placeholder='Name'
          />
          <Input
            onChange={e => this.props.contactEmail(e)}
            value={this.props.contact.email}
            placeholder='Email'
          />
          <TextArea
            rows={5}
            placholder='Leave message here...'
            value={this.props.contact.message}
            onChange={e => this.props.contactMessage(e)}
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
  contactModalHandler (val) {
    dispatch({
      type: 'CONTACT_MODAL',
      payload: val
    })
  },
  contactName (e) {
    dispatch({
      type: 'CONTACT_NAME',
      payload: e.target.value
    })
  },
  contactEmail (e) {
    dispatch({
      type: 'CONTACT_EMAIL',
      payload: e.target.value
    })
  },
  contactMessage (e) {
    dispatch({
      type: 'CONTACT_MESSAGE',
      payload: e.target.value
    })
  },
  clearFields () {
    dispatch({
      type: 'CLEAR_FIELDS',
      payload: ''
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
