import React, { Component } from 'react'
// import router from './router';
// import {Link} from 'react-router-dom';
import './Home.css'
import { Layout, Icon, Card, Button, Modal } from 'antd'
import NewArtModal from './NewArtModal'
import Contact from '../Contact'
import Axios from 'axios'
import { connect } from 'react-redux'
import ArtCards from './ArtCards'

class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount = () => {
    Axios.get(`/api/getArt`).then(resp => {
      console.log('getArt:', resp)
      this.props.setArtList(resp.data)
    })
  }

  artData = () => {
    console.log('artData function: ', this.props.newArt.artList)
    return this.props.newArt.artList
  }
  onDelete = id => {
    console.log(id)
    Axios.delete(`/api/deleteArt/${id}`).then(resp => {
      console.log('deleted', resp)
      this.props.setArtList(resp.data)
    })
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
    })
  }
  // use sessions for this with node since only one user
  addCart = (id, art) => {
    Axios.post(`/api/cartList`, {
      art
    }).then(resp => {
      console.log("Cart response: ", resp.data)
      this.props.setCartList(resp.data)
    })
  }

  render () {
    const { Header, Footer, Sider, Content } = Layout
    const { Meta } = Card

    return (
      <div>
        <Layout>
          <Content className='contentbox'>
            {this.artData().map(art => (
              <ArtCards
                key={art.id}
                id={art.id}
                title={art.title}
                description={art.description}
                size={art.size}
                price={art.price}
                imageurl={art.imageurl}
                art={art}
                onDelete={this.onDelete}
                onEditCard={this.onEditCard}
                addCart={this.addCart}
              />
            ))}
          </Content>

          <NewArtModal />

          <Footer className='footerpage'>
            <div className='email'>
              <Contact />
            </div>
            <h2>
              Like me:{' '}
              <a href='www.facebook.com' target='_blank'>
                www.facebook.com/blah
              </a>
              <Icon className='icons' type='facebook' />/ Follow me:
              <a href='www.twitter.com' target='_blank'>
                www.twitter.com/blah
              </a>{' '}
              <Icon className='icons' type='twitter' />/ Add me:{' '}
              <a href='www.instagram.com' target='_blank'>
                @randomscreenname
              </a>{' '}
              <Icon type='instagram' />
            </h2>
          </Footer>
        </Layout>
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
  setCartList (arr) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: arr
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
