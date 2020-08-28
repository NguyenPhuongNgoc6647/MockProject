import React from 'react'
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login'
import { Form, Input, Checkbox, Button, Modal} from 'antd'
import { BrowserRouter as Router, Link } from "react-router-dom"
import 'antd/dist/antd.css';
import './welcomeLogin.css'
// import Facebook from './Facebook'
import LoginFacebook from './LoginFacebook';

class FormLogin extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         visible: false,
      }
   }

   responseGoogle = (response) => {
    var res = response.profileObj;
    localStorage.setItem('userInfo', JSON.stringify(res))
    const userInfo = localStorage.getItem('userInfo')
    console.log('userInfo: ', userInfo)
    this.setState({
       visible:false
    })
    debugger;
   }

   showModal = () => {
      this.setState({
         visible: true,
      })
   }

   handleSubmit = e => {
      console.log(e)
      this.setState({
         visible: false,
      })
   }

   handleCancel = e => {
      console.log(e)
      this.setState({
         visible: false,
      })
   }

   render() {
      return (
         <React.Fragment>
            <Button type='primary' onClick={this.showModal}>Login</Button>
               <Modal 
                  title='Petfinder' 
                  style={{position:'relative'}}
                  visible={this.state.visible}
                  onOk={this.handleSubmit}
                  onCancel={this.handleCancel}>
               <div className='panel-form'>
                  <div className='title-form-login'>
                     <h2>LOGIN FORM</h2>
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
                        id='loginGG'
                        className="btnGoogle"
                        clientId="863488352231-f0qksbn5f313uhm9f7n1c1p459p7bm35.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        // onClick={() => this.setHideModal()}
                        >
                        <Link to='/IndexPage' style={{ display: 'block' }}>Login with Google</Link>
                     </GoogleLogin>
                     {/* <FacebookLogin
                        cssClass="btnFacebook"
                        icon={<i className="fa fa-facebook" style={{ marginLeft: '5px' }}></i>}
                        textButton="&nbsp;&nbsp;Log In with Facebook"
                     /> */}
                     {/* <LoginFacebook /> */}
                  </Form.Item>
                  </Form>
               </div>
            </Modal>
         </React.Fragment>
      )
   }
}
export default FormLogin