
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import { Form, Input, Checkbox, Button } from 'antd'
import 'antd/dist/antd.css';
import './welcomeLogin.css'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import Home from './Home';
export class WelcomeLogin extends Component {

  responseGoogle = (response) => {
    var res = response.profileObj;
    // console.log('dataUser: ',res);
    localStorage.setItem('userInfo', JSON.stringify(res))
    const userInfo = localStorage.getItem('userInfo')
    console.log('userInfo: ', userInfo)
    debugger;
  }

  render() {
    return (
      <div className='container'>
        <div className='panel-form'>
          <div className='title-form-login'>
            <h2>Login Form</h2>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item className='box-btn'>
              <GoogleLogin
                className="btnGoogle"
                clientId="863488352231-f0qksbn5f313uhm9f7n1c1p459p7bm35.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle} >
                <Link to='/exam/home'>Login with Google</Link>
              </GoogleLogin>
              <FacebookLogin  
              cssClass="btnFacebook"
              icon={<i className="fa fa-facebook" style = {{marginLeft:'5px'}}></i>}
              textButton = "&nbsp;&nbsp;Sign In with Facebook"  
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    )
  }
}
export default WelcomeLogin