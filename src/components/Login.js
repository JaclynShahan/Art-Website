import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import router from './router';
import { Form, Icon, Input, Button, Checkbox, Avatar, Upload, message } from 'antd'
import './Login.css'

class Login extends Component {
  constructor() {
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
  
    return (
      <div>
          {/* <div className='imgcontainer'>
            <Avatar size={74} icon='user' />
          </div> */}
          <form className='form-content'>
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
          <div className='container'>
            <label>Username:</label>
            <Input type='text' placeholder='Enter Username...' />
            <label>Password:</label>
            <Input type='password' placeholder='Enter Password...' />
            <div className='container'>
              <br />
              <Button type='submit'>Login</Button>
              <span className='signup'>OR</span>
              <span className='signup'>
                <a href='a'>Create Account</a>
              </span>
              <br />
              <br />
              <Input type='checkbox' />
              <span className='spacing'>Remember Me</span>
            </div>
          </div>
          <div className='container'>
            <Button>Cancel</Button>
            <span className='psw'>
              Forgot <a href='#'>Password?</a>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
