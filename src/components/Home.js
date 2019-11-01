import React, { Component } from 'react'
// import router from './router';
// import {Link} from 'react-router-dom';
import './Home.css'
import { Layout, Icon, Card, Button, Modal } from 'antd'
import NewArtModal from './NewArtModal'
import Axios from 'axios'
import { connect } from 'react-redux'
import ArtCards from './ArtCards'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    Axios.get(`/api/getArt`).then(resp => {
      console.log(resp)
      this.props.setArtList(resp.data)
    })
  }

  artData = () => {
      console.log("artData function: ", this.props.newArt.artList)
      return this.props.newArt.artList
  }
  onDelete = id => {
    Axios.delete(`/api/deleteArt/${id}`).then(resp => {
      console.log(resp)
      this.props.setArtList(resp.data)
    })
  }

  render () {
    const { Header, Footer, Sider, Content } = Layout
    const { Meta } = Card

    return (
      <div>
        <Layout>
          
          
          <Content className="contentbox">
          {this.artData().map(art => (
              <ArtCards 
              key={art.id}
              id={art.id}
              title={art.title}
              description={art.description}
              size={art.size}
              price={art.price}
              imageUrl={art.imageUrl}
              art={art}

              />
          ))}   
          </Content>
         
           
            <NewArtModal />
          
          <Footer className='footerpage'>
            <h2>
             
              Like me: www.facebook.com/blah
              <Icon className='icons' type='facebook' />/ Follow me:
              www.twitter.com/blah <Icon className='icons' type='twitter' />/
              Add me: @randomscreenname <Icon type='instagram' />
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
