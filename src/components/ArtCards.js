import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Layout, Card, Icon, Button, Upload, message } from 'antd'

class ArtCards extends Component {
  constructor () {
    super()
    this.state = {
      loading: false
    }
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render () {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
                <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
                // <img src='https://www.keithmillsartist.com/uploads/1/0/7/1/10719910/between-the-rivers_orig.jpg' />
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
